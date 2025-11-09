import React from "react";
import "./About.css";
import { aboutData } from "../../data/aboutData";
import { connect } from "react-redux";

type IAboutProps = Partial<ReturnType<typeof mapStateToProps>>;

const About = (props: IAboutProps) => {
  const { theme } = props;
  return (
    <div
      className="about"
      id="about"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-line"
          style={{ backgroundColor: theme.primary }}
        ></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
          <p style={{ color: theme.tertiary80 }}>
            {aboutData.description1}
            <br />
            <br />
            {aboutData.description2}
          </p>
        </div>
        <div className="about-img">
          <img
            src={
              aboutData.image === 1
                ? String(theme.aboutimg1)
                : String(theme.aboutimg2)
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.rootState.theme,
});

export default connect(mapStateToProps)(About);
