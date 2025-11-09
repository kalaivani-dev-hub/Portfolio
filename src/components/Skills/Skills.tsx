import React from "react";
import Marquee from "react-fast-marquee";
import "./Skills.css";
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage";
import { connect } from "react-redux";

type ISkillsProps = Partial<ReturnType<typeof mapStateToProps>>;

function Skills(props: ISkillsProps) {
  const { theme } = props;

  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  return (
    <div className="skills" style={{ backgroundColor: theme.secondary }}>
      <div className="skillsHeader">
        <h2 style={{ color: theme.primary }}>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <img
                  src={skillsImage(skill) as unknown as string}
                  alt={skill}
                />
                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.rootState.theme,
});

export default connect(mapStateToProps)(Skills);
