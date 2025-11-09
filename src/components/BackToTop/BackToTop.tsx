import React, { useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import makeStyles from "@material-ui/core/styles/makeStyles";

import "./BackToTop.css";
import { connect } from "react-redux";

type IBackToTopProps = Partial<ReturnType<typeof mapStateToProps>>;

function BackToTop(props: IBackToTopProps) {
  const [visible, setVisible] = useState(false);

  const { theme } = props;

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const useStyles = makeStyles(() => ({
    icon: {
      fontSize: "3rem",
      color: theme.tertiary,
    },
  }));

  const classes = useStyles();

  return (
    <div style={{ display: visible ? "inline" : "none" }} className="backToTop">
      <button onClick={scrollToTop} aria-label="Back to top">
        <IoIosArrowDropupCircle className={classes.icon} />
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.rootState.theme,
});

export default connect(mapStateToProps)(BackToTop);
