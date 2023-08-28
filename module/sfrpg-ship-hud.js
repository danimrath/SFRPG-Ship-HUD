import { CONST } from "./const.js";
import { getSetting, setSetting } from "./utils.js";

export class ShipHUD extends Application {
  settings = {};

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      left: 0,
      top: 0,
      width: game.settings.get(CONST.MODULE_NAME, CONST.SETTINGS.WIDTH),
      height: game.settings.get(CONST.MODULE_NAME, CONST.SETTINGS.HEIGHT),
      id: CONST.MODULE_NAME,
      template: `modules/${CONST.MODULE_NAME}/templates/sfrpg-ship-hud.html`,
      popOut: false,
    });
  }

  async _injectHTML(html) {
    $("#interface").after(html);

    this._element = html;
  }

  getShipActor() {
    const playerShip = game.actors.find(
      (x) => x.name === this.settings.playerShip && x.type === "starship"
    );
    return playerShip;
  }

  shipTokenPresent() {
    const playerShip = canvas.tokens.ownedTokens.find(
      (a) => a.name === this.settings.playerShip
    );
    return playerShip?.length > 0;
  }

  getData(options = {}) {
    return super.getData(options);
  }

  updateShipImage(imagePath) {
    this.settings.imagePath = imagePath;
    setSetting(CONST.SETTINGS.IMAGE_PATH, imagePath);
    this.element
      .find(".shipImg")
      .css("background-image", `url("${imagePath}")`);
  }

  async render(force = false, options = {}) {
    await super._render(force, options);

    this.#initSettings();
    this.#initCssVariables();

    const shipActor = this.getShipActor();
    if (shipActor) {
      if (this.settings.useActorImage) {
        this.updateShipImage(shipActor.img);
      } else if (
        this.settings.imagePath === undefined ||
        this.settings.imagePath === ""
      ) {
        this.updateShipImage(CONST.SETTINGS.DEFAULT_IMAGE_PATH);
      }
      this.updateHUD(shipActor);
    } else {
      ui.notifications.warn(
        `SFRPG - Ship Hud - Player Ship (${this.settings.playerShip}) not found.`,
        { permanent: false }
      );
      this.showShipHud(false);
    }

    return this;
  }

  #initSettings = () => {
    this.settings.anchor = getSetting(CONST.SETTINGS.ANCHOR);
    this.settings.horizontal = getSetting(CONST.SETTINGS.HORIZONTAL);
    this.settings.vertical = getSetting(CONST.SETTINGS.VERTICAL);
    this.settings.fontSize = getSetting(CONST.SETTINGS.FONT_SIZE);
    this.settings.font = getSetting(CONST.SETTINGS.FONT);
    this.settings.fontColor = getSetting(CONST.SETTINGS.FONT_COLOR);
    this.settings.width = getSetting(CONST.SETTINGS.WIDTH);
    this.settings.heigth = getSetting(CONST.SETTINGS.HEIGHT);
    this.settings.labelBgColor = getSetting(CONST.SETTINGS.LABEL_BG_COLOR);
    this.settings.labelHPVertical = getSetting(
      CONST.SETTINGS.LABEL_HP_VERTICAL
    );
    this.settings.labelShieldTop = getSetting(CONST.SETTINGS.LABEL_SHIELD_TOP);
    this.settings.labelShieldRight = getSetting(
      CONST.SETTINGS.LABEL_SHIELD_RIGHT
    );
    this.settings.labelShieldLeft = getSetting(
      CONST.SETTINGS.LABEL_SHIELD_LEFT
    );
    this.settings.labelShieldBottom = getSetting(
      CONST.SETTINGS.LABEL_SHIELD_BOTTOM
    );
    this.settings.playerShip = getSetting(CONST.SETTINGS.PLAYER_SHIP_NAME);
    this.settings.useActorImage = getSetting(CONST.SETTINGS.USE_ACTOR_IMAGE);
    this.settings.imagePath = getSetting(CONST.SETTINGS.IMAGE_PATH);
    this.settings.imageFacing = getSetting(CONST.SETTINGS.IMAGE_FACING);
  };

  #initCssVariables() {
    this.element.css("--sh-font-size", this.settings.fontSize + "px");
    this.element.css("--sh-font", this.settings.font);
    this.element.css("--sh-font-color", this.settings.fontColor);
    this.element.css("--sh-width", this.settings.width + "px");
    this.element.css("--sh-height", this.settings.heigth + "px");
    this.element.css("--sh-horizontal", this.settings.horizontal);
    this.element.css("--sh-vertical", this.settings.vertical);
    this.element.css("--sh-label-bg-color", this.settings.labelBgColor);
    this.element.css("--sh-label-hp-vertical", this.settings.labelHPVertical);
    this.element.attr("class", CONST.ANCHOR_CLASSES[this.settings.anchor]);
    this.element.css("--sh-label-shield-top", this.settings.labelShieldTop);
    this.element.css("--sh-label-shield-right", this.settings.labelShieldRight);
    this.element.css("--sh-label-shield-left", this.settings.labelShieldLeft);
    this.element.css(
      "--sh-label-shield-Bottom",
      this.settings.labelShieldBottom
    );
    this.element
      .find(".shipImg")
      .css("background-image", `url("${this.settings.imagePath}")`);
  }

  showShipHud(show) {
    if (
      !ui.sidebar._collapsed &&
      (this.settings.anchor === "b" || this.settings.anchor === "c")
    ) {
      this.element.css(
        "right",
        `calc(${this.settings.horizontal} + var(--sidebar-width))`
      );
    } else {
      this.element.css("right", `calc(${this.settings.horizontal} + 32px)`);
    }

    this.element.attr("class", CONST.ANCHOR_CLASSES[this.settings.anchor]);

    if (show) {
      this.element.css("opacity", "1.0");
    } else {
      this.element.css("opacity", "0.0");
    }
  }

  async updateHUD(actor) {
    const hp = actor.system.attributes.hp.value ?? 0;
    const maxhp = actor.system.attributes.hp.max ?? 0;

    const maxsp = actor.system.attributes.shields.evenDistribution ?? 0;
    let topsp = 0;
    let bottomsp = 0;
    let leftsp = 0;
    let rightsp = 0;

    switch (CONST.IMAGE_FACES[this.settings.imageFacing]) {
      case CONST.IMAGE_FACES.NORTH:
        topsp = actor.system.quadrants.forward.shields.value ?? 0;
        rightsp = actor.system.quadrants.starboard.shields.value ?? 0;
        bottomsp = actor.system.quadrants.aft.shields.value ?? 0;
        leftsp = actor.system.quadrants.port.shields.value ?? 0;
        break;
      case CONST.IMAGE_FACES.EAST:
        topsp = actor.system.quadrants.port.shields.value ?? 0;
        rightsp = actor.system.quadrants.forward.shields.value ?? 0;
        bottomsp = actor.system.quadrants.starboard.shields.value ?? 0;
        leftsp = actor.system.quadrants.aft.shields.value ?? 0;
        break;
      case CONST.IMAGE_FACES.SOUTH:
        topsp = actor.system.quadrants.aft.shields.value ?? 0;
        rightsp = actor.system.quadrants.port.shields.value ?? 0;
        bottomsp = actor.system.quadrants.forward.shields.value ?? 0;
        leftsp = actor.system.quadrants.starboard.shields.value ?? 0;
        break;
      case CONST.IMAGE_FACES.WEST:
        topsp = actor.system.quadrants.starboard.shields.value ?? 0;
        rightsp = actor.system.quadrants.aft.shields.value ?? 0;
        bottomsp = actor.system.quadrants.port.shields.value ?? 0;
        leftsp = actor.system.quadrants.forward.shields.value ?? 0;
        break;
    }

    this.element.find(".labelHP").html(hp + "/" + maxhp);
    this.element.find(".labelShieldTop").html(topsp + "/" + maxsp);
    this.element.find(".labelShieldLeft").html(leftsp + "/" + maxsp);
    this.element.find(".labelShieldBottom").html(bottomsp + "/" + maxsp);
    this.element.find(".labelShieldRight").html(rightsp + "/" + maxsp);

    this.showShipHud(true);
  }
}
