import { combineReducers } from "redux";
import { ITheme, orangeThemeDark } from "../theme/theme";
import { IConfigList, themeConfig } from "../utils/Theme.helper";

export interface IRootState {
  theme: ITheme;
  drawerOpen: boolean;
  isDarkMode: boolean;
  configList: IConfigList[];
}

// Reducers
const initialState = (isDarkMode: boolean): IRootState => {
  return {
    theme: orangeThemeDark,
    drawerOpen: false,
    isDarkMode: true,
    configList: themeConfig(isDarkMode),
  };
};

const counterReducer = (
  state = initialState(false),
  action: {
    type: "THEME" | "DRAWER" | "THEME-MODE" | "CONFIG";
    payload: IRootState;
  }
) => {
  switch (action.type) {
    case "THEME":
      return { ...state, theme: action.payload };
    case "DRAWER":
      return { ...state, drawerOpen: action.payload };
    case "THEME-MODE": {
      return { ...state, isDarkMode: action.payload };
    }
    case "CONFIG": {
      return { ...state, configList: action.payload };
    }
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  rootState: counterReducer,
  // Add other reducers here if you have more
});

export default rootReducer;
