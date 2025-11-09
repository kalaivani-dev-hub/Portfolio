import React, { useState } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";
import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { FaFolderOpen, FaUser } from "react-icons/fa";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";

import "./Navbar.css";
import { headerData } from "../../data/headerData";
import { FormControlLabel, FormGroup } from "@material-ui/core";
import Switch from "@mui/material/Switch/Switch";
import { styled } from "@mui/material/styles";
import { themeConfig } from "../../utils/Theme.helper";
import { connect } from "react-redux";

type INavProps = Partial<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
>;

function Navbar(props: INavProps) {
  const {
    rootState,

    // REDUCERS
    updateTheme,
    updateConfigList,
    updateDrawer,
    updateThemeMode,
  } = props;

  const { theme, isDarkMode, drawerOpen, configList } = rootState;

  const [open, setOpen] = useState(drawerOpen);

  const handleDrawerOpen = () => {
    setOpen(true);
    updateDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    updateDrawer(false);
  };

  const onDarkThemeSwitch = (checked) => {
    updateThemeMode(checked);

    const currentThemeIndex = configList.findIndex((element) => {
      return element.selected;
    });

    const themeConfigList = themeConfig(checked);
    const newConfigList = themeConfigList.map((item) => {
      item.selected = false;
      return item;
    });
    newConfigList[currentThemeIndex].selected = true;
    updateConfigList(newConfigList);
    updateTheme(themeConfigList[currentThemeIndex].theme);
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  const useStyles = makeStyles((t) => ({
    navMenu: {
      fontSize: "2.5rem",
      color: theme.tertiary,
      cursor: "pointer",
      transform: "translateY(-10px)",
      transition: "color 0.3s",
      "&:hover": {
        color: theme.primary,
      },
      [t.breakpoints.down("md")]: {
        fontSize: "2.5rem",
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },
    MuiDrawer: {
      padding: "0em 1.8em",
      width: "14em",
      fontFamily: " var(--primaryFont)",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: " 24px",
      background: theme.secondary,
      overflow: "hidden",
      borderTopRightRadius: "40px",
      borderBottomRightRadius: "40px",
      [t.breakpoints.down("md")]: {
        width: "12em",
      },
    },
    closebtnIcon: {
      fontSize: "2rem",
      fontWeight: "bold",
      cursor: "pointer",
      color: theme.primary,
      position: "absolute",
      right: 40,
      top: 40,
      transition: "color 0.2s",
      "&:hover": {
        color: theme.tertiary,
      },
      [t.breakpoints.down("md")]: {
        right: 20,
        top: 20,
      },
    },
    drawerItem: {
      margin: "2rem auto",
      borderRadius: "78.8418px",
      background: theme.secondary,
      color: theme.primary,
      width: "85%",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      padding: "0 30px",
      boxSizing: "border-box",
      border: "2px solid",
      borderColor: theme.primary,
      transition: "background-color 0.2s, color 0.2s",
      "&:hover": {
        background: theme.primary,
        color: theme.secondary,
      },
      [t.breakpoints.down("md")]: {
        width: "100%",
        padding: "0 25px",
        height: "55px",
      },
    },
    drawerLinks: {
      fontFamily: "var(--primaryFont)",
      width: "50%",
      fontSize: "1.3rem",
      fontWeight: 600,
      [t.breakpoints.down("md")]: {
        fontSize: "1.125rem",
      },
    },
    drawerIcon: {
      fontSize: "1.6rem",
      [t.breakpoints.down("md")]: {
        fontSize: "1.385rem",
      },
    },
  }));

  const classes = useStyles();

  const shortname = (name) => {
    if (name.length > 12) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  return (
    <div className="navbar">
      <div className="navbar--container">
        <h1 style={{ color: theme.secondary }}>{shortname(headerData.name)}</h1>
        <FormGroup>
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            label=""
            checked={isDarkMode}
            onChange={(_event, checked) => onDarkThemeSwitch(checked)}
          />
        </FormGroup>
        <IoMenuSharp
          className={classes.navMenu}
          onClick={handleDrawerOpen}
          aria-label="Menu"
        />
      </div>
      <Drawer
        variant="temporary"
        onClose={(event, reason) => {
          if (reason === "backdropClick" || reason === "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="left"
        open={open}
        classes={{ paper: classes.MuiDrawer }}
        className="drawer"
        disableScrollLock={true}
      >
        <div className="div-closebtn">
          <CloseIcon
            onClick={handleDrawerClose}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                handleDrawerClose();
              }
            }}
            className={classes.closebtnIcon}
            role="button"
            tabIndex={0}
            aria-label="Close"
          />
        </div>
        <br />

        <div onClick={handleDrawerClose}>
          <div className="navLink--container">
            <Fade left>
              <NavLink to="/" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <IoHomeSharp className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Home</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to="/#about" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <FaUser className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>About</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to="/#resume" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <HiDocumentText className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Resume</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to="/#services" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <BsFillGearFill className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Services</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to="/#blog" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <FaFolderOpen className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Blog</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <MdPhone className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Contact</span>
                </div>
              </NavLink>
            </Fade>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  rootState: state.rootState,
});

const mapDispatchToProps = (dispatch) => ({
  updateTheme: (payload) => dispatch({ type: "THEME", payload }),
  updateDrawer: (payload) => dispatch({ type: "DRAWER", payload }),
  updateConfigList: (payload) => dispatch({ type: "CONFIG", payload }),
  updateThemeMode: (payload) => dispatch({ type: "THEME-MODE", payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
