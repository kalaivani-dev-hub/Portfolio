import React from "react";

import "./Experience.css";
import { experienceData } from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";
import { connect } from "react-redux";

type IExperienceProps = Partial<ReturnType<typeof mapStateToProps>>;

function Experience(props: IExperienceProps) {
  const { theme } = props;
  return (
    <div
      className="experience"
      id="experience"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="experience-body">
        <div className="experience-image">
          <img src={String(theme.expimg)} alt="" />
        </div>
        <div className="experience-description">
          <h1 style={{ color: theme.primary }}>Experience</h1>
          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              jobTitle={exp.jobTitle}
              company={exp.company}
              startYear={exp.startYear}
              endYear={exp.endYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.rootState.theme,
});

export default connect(mapStateToProps)(Experience);
