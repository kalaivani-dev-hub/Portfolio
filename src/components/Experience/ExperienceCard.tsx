import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Fade from "react-reveal/Fade";
import expImgWhite from "../../assets/svg/experience/expImgWhite.svg";
import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";
import "./Experience.css";
import { connect } from "react-redux";

type IExperienceCardProps = Partial<ReturnType<typeof mapStateToProps>> & {
  id;
  company;
  jobTitle;
  startYear;
  endYear;
};

function ExperienceCard(props: IExperienceCardProps) {
  const { theme, id, company, jobTitle, startYear, endYear } = props;

  const useStyles = makeStyles((t) => ({
    experienceCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div key={id} className={`experience-card ${classes.experienceCard}`}>
        <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
          <img
            src={
              (theme.type === "light"
                ? expImgBlack
                : expImgWhite) as unknown as string
            }
            alt=""
          />
        </div>
        <div className="experience-details">
          <h6 style={{ color: theme.primary }}>
            {startYear} - {endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{jobTitle}</h4>
          <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
        </div>
      </div>
    </Fade>
  );
}

const mapStateToProps = (state) => ({
  theme: state.rootState.theme,
});

export default connect(mapStateToProps)(ExperienceCard);
