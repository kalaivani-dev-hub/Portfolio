import {
  ITheme,
  blueThemeDark,
  blueThemeLight,
  bwThemeDark,
  bwThemeLight,
  greenThemeDark,
  greenThemeLight,
  orangeThemeDark,
  orangeThemeLight,
  pinkThemeDark,
  pinkThemeLight,
  purpleThemeDark,
  purpleThemeLight,
  redThemeDark,
  redThemeLight,
  yellowThemeDark,
  yellowThemeLight,
} from "../theme/theme";

export interface IConfigList {
  name: string;
  color: string;
  selected: boolean;
  theme: ITheme;
}

export const themeConfig = (isDark: boolean) => {
  return [
    {
      name: "orange",
      color: "#f56539",
      selected: true,
      theme: isDark ? orangeThemeDark : orangeThemeLight,
    },
    {
      name: "green",
      color: "#3fc337",
      selected: false,
      theme: isDark ? greenThemeDark : greenThemeLight,
    },
    {
      name: "black",
      color: "#B6B6B6",
      selected: false,
      theme: isDark ? bwThemeDark : bwThemeLight,
    },
    {
      name: "blue",
      color: "#545fc4",
      selected: false,
      theme: isDark ? blueThemeDark : blueThemeLight,
    },
    {
      name: "red",
      color: "#f03939",
      selected: false,
      theme: isDark ? redThemeDark : redThemeLight,
    },
    {
      name: "purple",
      color: "#823ae0",
      selected: false,
      theme: isDark ? purpleThemeDark : purpleThemeLight,
    },
    {
      name: "pink",
      color: "#ff4f93",
      selected: false,
      theme: isDark ? pinkThemeDark : pinkThemeLight,
    },
    {
      name: "yellow",
      color: "#E9AD35",
      selected: false,
      theme: isDark ? yellowThemeDark : yellowThemeLight,
    },
  ];
};
