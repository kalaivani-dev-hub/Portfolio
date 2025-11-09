import React from "react";
import "./Education.css";
import EducationCard from "./EducationCard";
import { educationData } from "../../data/educationData";
import { connect } from "react-redux";

type IEducationProps = Partial<ReturnType<typeof mapStateToProps>>;

function Education(props: IEducationProps) {
  const { theme } = props;
  return (
    <div
      className="education"
      id="resume"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="education-body">
        <div className="education-description">
          <h1 style={{ color: theme.primary }}>Education</h1>
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
            />
          ))}
        </div>
        <div className="education-image">
          <img src={String(theme.eduimg)} alt="" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.rootState.theme,
});

export default connect(mapStateToProps)(Education);
