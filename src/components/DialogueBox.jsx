import CharacterName from "./CharacterName";

export default function DialogueBox({
  speaker,
  text,
  canAdvance,
  hasChoices,
  onAdvance,
}) {
  return (
    <div className="w-full max-w-5xl rounded-[2rem] border border-white/12 bg-panel-strong/95 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <CharacterName>{speaker}</CharacterName>
        {!hasChoices ? (
          <button
            type="button"
            onClick={onAdvance}
            className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-medium tracking-[0.2em] text-white/70 transition hover:bg-white/12 hover:text-white"
          >
            {canAdvance ? "AVANCAR" : "REINICIAR"}
          </button>
        ) : null}
      </div>

      <p className="text-pretty text-base leading-8 text-white/92 sm:text-lg">
        {text}
      </p>

      <div className="mt-4 text-xs tracking-[0.18em] text-white/45">
        {hasChoices
          ? "A escolha vai marcar o tom desta noite."
          : "Clique na tela ou use o botao para continuar."}
      </div>
    </div>
  );
}
