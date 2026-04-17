"use client";

import { useMemo, useState } from "react";
import DialogueBox from "./DialogueBox";
import ChoiceList from "./ChoiceList";
import {
  applyEffects,
  getAvailableChoices,
  getInitialPlayerState,
  getSceneById,
  getSceneMood,
  resolveNextScene,
} from "../lib/gameUtils";
import { initialSceneId, scenes } from "../data/scenes";

const title = "酔いと恋の境界線";
const romanizedTitle = "Yoi to Koi no Kyoukaisen";

function CharacterPortrait({ scene }) {
  const [imageMissing, setImageMissing] = useState(false);
  const showImage = scene.characterImage && !imageMissing;

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[12rem] top-24 flex items-end justify-center px-6 sm:bottom-[14rem]">
      <div className="relative h-full w-full max-w-6xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />

        {showImage ? (
          <img
            src={scene.characterImage}
            alt={scene.speaker || "Character portrait"}
            onError={() => setImageMissing(true)}
            className="absolute bottom-0 left-1/2 max-h-full w-auto max-w-[68vw] -translate-x-1/2 object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)] sm:max-w-[32rem]"
          />
        ) : (
          <div className="absolute bottom-0 left-1/2 h-[28rem] w-[16rem] -translate-x-1/2 rounded-t-[8rem] bg-gradient-to-b from-white/16 via-white/9 to-white/4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] blur-[1px] sm:h-[34rem] sm:w-[20rem]">
            <div className="absolute inset-x-6 bottom-0 top-16 rounded-t-[7rem] border border-white/12 bg-gradient-to-b from-white/14 to-transparent" />
          </div>
        )}
      </div>
    </div>
  );
}

function StatPill({ label, value }) {
  return (
    <div className="rounded-full border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-md">
      <div className="text-[0.6rem] uppercase tracking-[0.24em] text-white/45">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

export default function VisualNovelScreen() {
  const [currentSceneId, setCurrentSceneId] = useState(initialSceneId);
  const [playerState, setPlayerState] = useState(getInitialPlayerState());
  const currentScene = getSceneById(scenes, currentSceneId);

  const mood = useMemo(() => getSceneMood(currentSceneId), [currentSceneId]);
  const availableChoices = useMemo(
    () => getAvailableChoices(currentScene, playerState),
    [currentScene, playerState],
  );
  const hasChoices = Boolean(availableChoices.length);
  const canAdvance = Boolean(resolveNextScene(currentScene, playerState));

  const handleAdvance = () => {
    const nextSceneId = resolveNextScene(currentScene, playerState);

    if (nextSceneId) {
      setCurrentSceneId(nextSceneId);
      return;
    }

    setCurrentSceneId(initialSceneId);
    setPlayerState(getInitialPlayerState());
  };

  const handleChoice = (choice) => {
    const nextPlayerState = applyEffects(playerState, choice.effects);

    setPlayerState(nextPlayerState);
    setCurrentSceneId(resolveNextScene(choice, nextPlayerState));
  };

  if (!currentScene) {
    return null;
  }

  const backgroundStyle = {
    backgroundImage: `
      linear-gradient(180deg, rgba(6,10,22,0.28) 0%, rgba(6,10,22,0.64) 62%, rgba(4,5,12,0.9) 100%),
      radial-gradient(circle at 18% 18%, ${mood.glow}, transparent 26%),
      radial-gradient(circle at 78% 14%, rgba(255,255,255,0.08), transparent 22%),
      linear-gradient(135deg, ${mood.baseFrom} 0%, ${mood.baseTo} 100%),
      url(${currentScene.background})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main
      className="relative flex min-h-screen overflow-hidden"
      style={backgroundStyle}
      onClick={!hasChoices ? handleAdvance : undefined}
    >
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black/62 via-black/26 to-transparent" />

      <CharacterPortrait scene={currentScene} />

      <section className="relative z-10 flex min-h-screen w-full flex-col justify-between px-4 py-5 sm:px-6 sm:py-6 lg:px-10">
        <header className="flex items-start justify-between gap-4">
          <div className="rounded-[1.6rem] border border-white/12 bg-black/25 px-4 py-3 backdrop-blur-md">
            <div className="font-title text-lg tracking-[0.24em] text-white/95 text-shadow-soft sm:text-xl">
              {title}
            </div>
            <div className="mt-1 text-[0.72rem] uppercase tracking-[0.28em] text-white/52">
              {romanizedTitle}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <StatPill label="Bia" value={playerState.affinity} />
            <StatPill label="Ousadia" value={playerState.boldness} />
            <StatPill label="Cautela" value={playerState.caution} />
          </div>
        </header>

        <div className="flex flex-1 items-end justify-center pb-2 pt-12">
          <div className="w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <DialogueBox
              speaker={currentScene.speaker}
              text={currentScene.text}
              canAdvance={canAdvance}
              hasChoices={hasChoices}
              onAdvance={handleAdvance}
            />
            <ChoiceList choices={availableChoices} onSelect={handleChoice} />
          </div>
        </div>
      </section>
    </main>
  );
}
