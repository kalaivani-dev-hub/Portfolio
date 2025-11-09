import React from "react";
import { Link } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { HiArrowRight } from "react-icons/hi";

import "./Blog.css";
import { blogData } from "../../data/blogData";
import SingleBlog from "./SingleBlog/SingleBlog";
import { connect } from "react-redux";

type IBLogProps = Partial<ReturnType<typeof mapStateToProps>>;

function Blog(props: IBLogProps) {
  const { theme } = props;

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {blogData.length > 0 && (
        <div
          className="blog"
          id="blog"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="blog--header">
            <h1 style={{ color: theme.primary }}>Blog</h1>
          </div>
          <div className="blog--body">
            <div className="blog--bodyContainer">
              {blogData
                .slice(0, 3)
                .reverse()
                .map((blog) => (
                  <SingleBlog
                    theme={theme}
                    title={blog.title}
                    desc={blog.description}
                    date={blog.date}
                    image={blog.image}
                    url={blog.url}
                    key={blog.id}
                    id={blog.id}
                  />
                ))}
            </div>

            {blogData.length > 3 && (
              <div className="blog--viewAll">
                <Link to="/blog">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  theme: state.rootState.theme,
});

export default connect(mapStateToProps)(Blog);
