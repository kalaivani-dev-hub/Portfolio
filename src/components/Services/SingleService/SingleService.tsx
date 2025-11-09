import React from "react";
import Fade from "react-reveal/Fade";
import "./SingleService.css";
import { connect } from "react-redux";

type ISingleServiceProps = Partial<ReturnType<typeof mapStateToProps>> & {
  id;
  title;
  icon;
};

function SingleService(props: ISingleServiceProps) {
  const { theme, id, title, icon } = props;
  return (
    <Fade bottom>
      <div
        key={id}
        className="single-service"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className="service-content" style={{ color: theme.tertiary }}>
          <i className="service-icon">{icon}</i>
          <h4 style={{ color: theme.tertiary }}>{title}</h4>
        </div>
      </div>
    </Fade>
  );
}

const mapStateToProps = (state) => ({
  theme: state.rootState.theme,
});

export default connect(mapStateToProps)(SingleService);
