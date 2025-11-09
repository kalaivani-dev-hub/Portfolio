import React from "react";
import hexRgb from "hex-rgb";
import "./ThemeSelection.css";
import { themeConfig } from "../../utils/Theme.helper";
import { connect } from "react-redux";

type IThemeSelectionProps = Partial<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
>;

const ThemeSelection = (props: IThemeSelectionProps) => {
  const {
    rootState: { isDarkMode, configList },
    updateConfigList,
    updateTheme,
  } = props;

  const onThemeChange = (theme, index) => {
    const themeConfigList = themeConfig(isDarkMode);
    const newConfigList = themeConfigList.map((item) => {
      item.selected = false;
      return item;
    });
    newConfigList[index].selected = true;
    updateConfigList(newConfigList);
    updateTheme(theme.theme);
  };

  const defaultSelect = configList.filter((item) => item.selected);
  let defaultTheme = false;
  if (defaultSelect.length === 0) {
    defaultTheme = true;
  }

  return (
    <>
      <div className="theme-select-parent">
        {configList.map((theme, index) => {
          const circleStyle = {
            backgroundColor: theme.theme.primary,
            border: `1px solid ${hexRgb(theme.theme.primary, {
              format: "css",
              alpha: 0.5,
            })}`,
          };
          return (
            <div className="circle-parent">
              <button
                style={circleStyle}
                className={`circle ${
                  theme.selected || (defaultTheme && index === 0)
                    ? "selected"
                    : ""
                }`}
                onClick={() => onThemeChange(theme, index)}
              ></button>
            </div>
          );
        })}
      </div>
      {/* <div className="theme-select-parent">
        <Switch />
      </div> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  rootState: state.rootState,
});

const mapDispatchToProps = (dispatch) => ({
  updateTheme: (payload) => dispatch({ type: "THEME", payload }),
  updateConfigList: (payload) => dispatch({ type: "CONFIG", payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelection);
