import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Fade from "react-reveal/Fade";
import eduImgWhite from "../../assets/svg/education/eduImgWhite.svg";
import eduImgBlack from "../../assets/svg/education/eduImgBlack.svg";
import "./Education.css";
import { connect } from "react-redux";

type IEducationCardProps = Partial<ReturnType<typeof mapStateToProps>> & {
  id;
  institution;
  course;
  startYear;
  endYear;
};

function EducationCard(props: IEducationCardProps) {
  const { theme, id, institution, course, startYear, endYear } = props;

  const useStyles = makeStyles((t) => ({
    educationCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div key={id} className={`education-card ${classes.educationCard}`}>
        <div className="educard-img" style={{ backgroundColor: theme.primary }}>
          <img
            src={
              (theme.type === "light"
                ? eduImgBlack
                : eduImgWhite) as unknown as string
            }
            alt=""
          />
        </div>
        <div className="education-details">
          <h6 style={{ color: theme.primary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{course}</h4>
          <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>
        </div>
      </div>
    </Fade>
  );
}

const mapStateToProps = (state) => ({
  theme: state.rootState.theme,
});

export default connect(mapStateToProps)(EducationCard);
