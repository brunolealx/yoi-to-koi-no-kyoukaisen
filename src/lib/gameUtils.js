export function getInitialPlayerState() {
  return {
    affinity: 0,
    boldness: 0,
    caution: 0,
    flags: {},
  };
}

export function getSceneById(sceneMap, sceneId) {
  return sceneMap[sceneId] ?? null;
}

export function applyEffects(playerState, effects = {}) {
  return {
    affinity: playerState.affinity + (effects.affinity ?? 0),
    boldness: playerState.boldness + (effects.boldness ?? 0),
    caution: playerState.caution + (effects.caution ?? 0),
    flags: {
      ...playerState.flags,
      ...(effects.flags ?? {}),
    },
  };
}

export function meetsRequirements(playerState, requirements = {}) {
  const statChecks = [
    ["affinity", requirements.affinityMin, requirements.affinityMax],
    ["boldness", requirements.boldnessMin, requirements.boldnessMax],
    ["caution", requirements.cautionMin, requirements.cautionMax],
  ];

  const hasInvalidStat = statChecks.some(([stat, min, max]) => {
    const value = playerState[stat];

    if (min !== undefined && value < min) {
      return true;
    }

    if (max !== undefined && value > max) {
      return true;
    }

    return false;
  });

  if (hasInvalidStat) {
    return false;
  }

  if (!requirements.flags) {
    return true;
  }

  return Object.entries(requirements.flags).every(
    ([flag, expected]) => playerState.flags?.[flag] === expected,
  );
}

export function getAvailableChoices(scene, playerState) {
  if (!scene?.choices?.length) {
    return [];
  }

  return scene.choices.filter(
    (choice) => !choice.requirements || meetsRequirements(playerState, choice.requirements),
  );
}

export function resolveNextScene(node, playerState) {
  if (!node) {
    return null;
  }

  if (node.conditionalNext?.length) {
    const match = node.conditionalNext.find((option) =>
      meetsRequirements(playerState, option.requirements),
    );

    if (match) {
      return match.nextScene;
    }
  }

  return node.next ?? node.nextScene ?? null;
}

export function getSceneMood(sceneId) {
  const moods = {
    "street-arrival": {
      baseFrom: "rgba(24, 35, 74, 0.68)",
      baseTo: "rgba(91, 28, 58, 0.72)",
      glow: "rgba(255, 148, 102, 0.24)",
    },
    "front-door-route": {
      baseFrom: "rgba(36, 31, 53, 0.72)",
      baseTo: "rgba(17, 28, 50, 0.68)",
      glow: "rgba(255, 215, 144, 0.14)",
    },
    "front-door-release": {
      baseFrom: "rgba(17, 30, 58, 0.72)",
      baseTo: "rgba(67, 39, 50, 0.74)",
      glow: "rgba(152, 205, 255, 0.14)",
    },
    "wait-route": {
      baseFrom: "rgba(18, 20, 39, 0.78)",
      baseTo: "rgba(8, 12, 24, 0.9)",
      glow: "rgba(255, 170, 122, 0.1)",
    },
    "wait-hallway": {
      baseFrom: "rgba(18, 26, 45, 0.74)",
      baseTo: "rgba(38, 19, 35, 0.76)",
      glow: "rgba(245, 221, 163, 0.12)",
    },
    "excuse-route": {
      baseFrom: "rgba(37, 19, 28, 0.78)",
      baseTo: "rgba(18, 27, 48, 0.74)",
      glow: "rgba(255, 175, 129, 0.12)",
    },
    "bia-corner": {
      baseFrom: "rgba(18, 29, 70, 0.72)",
      baseTo: "rgba(92, 38, 67, 0.72)",
      glow: "rgba(255, 168, 128, 0.22)",
    },
    "night-walk": {
      baseFrom: "rgba(9, 22, 52, 0.76)",
      baseTo: "rgba(66, 29, 57, 0.72)",
      glow: "rgba(111, 204, 255, 0.16)",
    },
    "bar-entry": {
      baseFrom: "rgba(56, 24, 27, 0.8)",
      baseTo: "rgba(23, 12, 28, 0.76)",
      glow: "rgba(255, 184, 129, 0.18)",
    },
    "river-route": {
      baseFrom: "rgba(11, 29, 63, 0.76)",
      baseTo: "rgba(30, 44, 81, 0.72)",
      glow: "rgba(137, 208, 255, 0.16)",
    },
    "bridge-route": {
      baseFrom: "rgba(15, 18, 39, 0.8)",
      baseTo: "rgba(42, 30, 52, 0.74)",
      glow: "rgba(245, 230, 179, 0.12)",
    },
    "ending-kiss": {
      baseFrom: "rgba(53, 16, 42, 0.8)",
      baseTo: "rgba(15, 24, 57, 0.76)",
      glow: "rgba(255, 155, 140, 0.24)",
    },
    "ending-promise": {
      baseFrom: "rgba(21, 34, 70, 0.76)",
      baseTo: "rgba(24, 18, 38, 0.76)",
      glow: "rgba(154, 213, 255, 0.18)",
    },
    "ending-alone": {
      baseFrom: "rgba(16, 24, 49, 0.8)",
      baseTo: "rgba(11, 12, 23, 0.84)",
      glow: "rgba(220, 228, 255, 0.1)",
    },
    default: {
      baseFrom: "rgba(12, 20, 43, 0.74)",
      baseTo: "rgba(48, 24, 46, 0.7)",
      glow: "rgba(255, 154, 122, 0.16)",
    },
  };

  return moods[sceneId] ?? moods.default;
}
