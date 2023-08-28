import { CONST } from "./const.js";

export const registerSettings = () => {
  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.PLAYER_SHIP_NAME, {
    name: localize(CONST.SETTINGS.PLAYER_SHIP_NAME),
    hint: localizeHint(CONST.SETTINGS.PLAYER_SHIP_NAME),
    scope: "world",
    type: String,
    default: "",
    requiresReload: true,
    config: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.USE_ACTOR_IMAGE, {
    name: localize(CONST.SETTINGS.USE_ACTOR_IMAGE),
    hint: localizeHint(CONST.SETTINGS.USE_ACTOR_IMAGE),
    scope: "world",
    type: Boolean,
    default: false,
    requiresReload: true,
    config: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.IMAGE_PATH, {
    name: localize(CONST.SETTINGS.IMAGE_PATH),
    hint: localizeHint(CONST.SETTINGS.IMAGE_PATH),
    scope: "world",
    type: String,
    default: CONST.SETTINGS.DEFAULT_IMAGE_PATH,
    requiresReload: true,
    config: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.IMAGE_FACING, {
    name: localize(CONST.SETTINGS.IMAGE_FACING),
    hint: localizeHint(CONST.SETTINGS.IMAGE_FACING),
    scope: "world",
    type: String,
    default: CONST.IMAGE_FACES.NORTH,
    choices: {
        NORTH: localize(CONST.IMAGE_FACES.NORTH),
        EAST: localize(CONST.IMAGE_FACES.EAST),
        SOUTH: localize(CONST.IMAGE_FACES.SOUTH),
        WEST: localize(CONST.IMAGE_FACES.WEST),
    },
    requiresReload: true,
    config: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.ANCHOR, {
    name: localize(CONST.SETTINGS.ANCHOR),
    hint: localizeHint(CONST.SETTINGS.ANCHOR),
    scope: "world",
    type: String,
    default: "b",
    choices: {
      a: localize(CONST.ANCHOR_CLASSES.a),
      b: localize(CONST.ANCHOR_CLASSES.b),
      c: localize(CONST.ANCHOR_CLASSES.c),
      d: localize(CONST.ANCHOR_CLASSES.d),
    },
    config: true,
    requiresReload: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.FONT, {
    name: localize(CONST.SETTINGS.FONT),
    hint: localizeHint(CONST.SETTINGS.FONT),
    scope: "world",
    type: String,
    default: "Signika",
    config: true,
    requiresReload: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.FONT_SIZE, {
    name: localize(CONST.SETTINGS.FONT_SIZE),
    hint: localizeHint(CONST.SETTINGS.FONT_SIZE),
    scope: "world",
    type: String,
    default: "18",
    config: true,
    requiresReload: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.FONT_COLOR, {
    name: localize(CONST.SETTINGS.FONT_COLOR),
    hint: localizeHint(CONST.SETTINGS.FONT_COLOR),
    scope: "world",
    type: String,
    default: "#FFFFFF",
    config: true,
    requiresReload: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.LABEL_HP_VERTICAL, {
    name: localize(CONST.SETTINGS.LABEL_HP_VERTICAL),
    hint: localizeHint(CONST.SETTINGS.LABEL_HP_VERTICAL),
    scope: "world",
    type: String,
    default: "0.0em",
    config: true,
    requiresReload: true,
  });

  game.settings.register(CONST.MODULE_NAME,  CONST.SETTINGS.LABEL_SHIELD_TOP, {
    name: localize(CONST.SETTINGS.LABEL_SHIELD_TOP),
    hint: localizeHint(CONST.SETTINGS.LABEL_SHIELD_TOP),
    scope: "world",
    type: String,
    default: "0.0em",
    config: true,
    requiresReload: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.LABEL_SHIELD_RIGHT, {
    name: localize(CONST.SETTINGS.LABEL_SHIELD_RIGHT),
    hint: localizeHint(CONST.SETTINGS.LABEL_SHIELD_RIGHT),
    scope: "world",
    type: String,
    default: "0.0em",
    config: true,
    requiresReload: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.LABEL_SHIELD_LEFT, {
    name: localize(CONST.SETTINGS.LABEL_SHIELD_LEFT),
    hint: localizeHint(CONST.SETTINGS.LABEL_SHIELD_LEFT),
    scope: "world",
    type: String,
    default: "0.0em",
    config: true,
    requiresReload: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.LABEL_SHIELD_BOTTOM, {
    name: localize(CONST.SETTINGS.LABEL_SHIELD_BOTTOM),
    hint: localizeHint(CONST.SETTINGS.LABEL_SHIELD_BOTTOM),
    scope: "world",
    type: String,
    default: "0.0em",
    config: true,
    requiresReload: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.LABEL_BG_COLOR, {
    name: localize(CONST.SETTINGS.LABEL_BG_COLOR),
    hint: localizeHint(CONST.SETTINGS.LABEL_BG_COLOR),
    scope: "world",
    type: String,
    default: "",
    config: true,
    requiresReload: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.HEIGHT, {
    name: localize(CONST.SETTINGS.HEIGHT),
    hint: localizeHint(CONST.SETTINGS.HEIGHT),
    scope: "world",
    type: Number,
    default: "200",
    config: true,
    requiresReload: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.WIDTH, {
    name: localize(CONST.SETTINGS.WIDTH),
    hint: localizeHint(CONST.SETTINGS.WIDTH),
    scope: "world",
    type: Number,
    default: "200",
    config: true,
    requiresReload: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.HORIZONTAL, {
    name: localize(CONST.SETTINGS.HORIZONTAL),
    hint: localizeHint(CONST.SETTINGS.HORIZONTAL),
    scope: "world",
    type: String,
    default: "1em",
    config: true,
    requiresReload: true,
  });

  game.settings.register(CONST.MODULE_NAME, CONST.SETTINGS.VERTICAL, {
    name: localize(CONST.SETTINGS.VERTICAL),
    hint: localizeHint(CONST.SETTINGS.VERTICAL),
    scope: "world",
    type: String,
    default: "1em",
    config: true,
    requiresReload: true,
  });
};

export const localize = (value) =>  {
    return game.i18n.localize("sh." + value);
}

export const localizeHint = (value) => {
    return game.i18n.localize("sh." + value + "-hint");
}