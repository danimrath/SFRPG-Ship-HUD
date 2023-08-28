import {CONST} from "./const.js";

export const getSetting = (settingName) => {
    return game.settings.get(CONST.MODULE_NAME, settingName);
};

export const setSetting = (settingName, settingValue) => {
    return game.settings.set(CONST.MODULE_NAME, settingName, settingValue);
};

