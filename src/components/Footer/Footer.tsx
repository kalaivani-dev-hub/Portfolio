import React from "react";
import "./Footer.css";
import { headerData } from "../../data/headerData";
import { connect } from "react-redux";

type IFooterProps = Partial<ReturnType<typeof mapStateToProps>>;

function Footer(props: IFooterProps) {
  const { theme } = props;
  const shortname = (name) => {
    if (name.length > 10) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  return (
    <div className="footer" style={{ backgroundColor: theme.secondary }}>
      <p style={{ color: theme.tertiary }}>
        Made with
        <span style={{ color: theme.primary, margin: "0 0.5rem -1rem 0.5rem" }}>
          ❤
        </span>
        by {shortname(headerData.name)}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.rootState.theme,
});

export default connect(mapStateToProps)(Footer);
