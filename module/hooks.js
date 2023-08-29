import { ShipHUD } from "./sfrpg-ship-hud.js";
import { CONST } from "./const.js";
import { registerSettings } from "./settings.js";
import { getSetting } from "./utils.js";

export const initializeHooks = () => {
  Hooks.once("init", async () => {
    console.log(`${CONST.MODULE_NAME} | Initializing`);
    registerSettings();
    await preloadTemplates();
    CONFIG.ui.ShipHUD = ShipHUD;
  });

  Hooks.once("ready", async () => {
    // Only render if the user has entered a ship name
    const shipName = getSetting(CONST.SETTINGS.PLAYER_SHIP_NAME);
    if (shipName && shipName !== "") {
      await ui.ShipHUD.render(true);
    }
  });

  Hooks.on("canvasReady", async () => {
    const shipName = getSetting(CONST.SETTINGS.PLAYER_SHIP_NAME);
    if (shipName) {
      const shipToken = ui.ShipHUD.getShipToken();
      if (shipToken) {
        Hooks.on("updateActor", async (actor, data) => {
          if (actor.name === shipName) {
            ui.ShipHUD.updateHUD();
          }
        });
        ui.ShipHUD.updateHUD();
      } else {
        ui.ShipHUD.showShipHud(false);
      }
    } else {
      ui.ShipHUD.showShipHud(false);
    }
  });

  Hooks.on("renderSettingsConfig", (app, html) => {
    let labelBGName, labelBGColor;
    labelBGName = `${CONST.MODULE_NAME}.${CONST.SETTINGS.LABEL_BG_COLOR}`;
    labelBGColor = game.settings.get(
      CONST.MODULE_NAME,
      CONST.SETTINGS.LABEL_BG_COLOR
    );
    $("<input>")
      .attr("type", "color")
      .attr("data-edit", labelBGName)
      .val(labelBGColor)
      .insertAfter($(`input[name="${labelBGName}"]`, html).addClass("color"));

    let fontSettingName, fontSettingColour;
    fontSettingName = `${CONST.MODULE_NAME}.${CONST.SETTINGS.FONT_COLOR}`;
    fontSettingColour = game.settings.get(
      CONST.MODULE_NAME,
      CONST.SETTINGS.FONT_COLOR
    );
    $("<input>")
      .attr("type", "color")
      .attr("data-edit", fontSettingName)
      .val(fontSettingColour)
      .insertAfter(
        $(`input[name="${fontSettingName}"]`, html).addClass("color")
      );
  });
};

async function preloadTemplates() {
  const templatePaths = [
    `modules/${CONST.MODULE_NAME}/templates/sfrpg-ship-hud.html`,
  ];

  return await loadTemplates(templatePaths);
}
