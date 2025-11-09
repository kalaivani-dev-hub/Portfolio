import React from "react";

import "./Achievement.css";
import { achievementData } from "../../data/achievementData";
import AchievementCard from "./AchievementCard";
import { connect } from "react-redux";

type IAchievementProps = Partial<ReturnType<typeof mapStateToProps>>;

function Achievement(props: IAchievementProps) {
  const { theme } = props;
  return (
    <>
      {achievementData.achievements.length > 0 && (
        <div
          className="achievement"
          id="achievement"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="achievement-body">
            <h1 style={{ color: theme.primary }}>Achievements</h1>
            <h4 style={{ color: theme.tertiary }}>{achievementData.bio}</h4>
          </div>
          <div className="achievement-cards">
            {achievementData.achievements.map((achieve) => (
              <AchievementCard
                key={achieve.id}
                id={achieve.id}
                title={achieve.title}
                details={achieve.details}
                date={achieve.date}
                field={achieve.field}
                image={achieve.image}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  theme: state.rootState.theme,
});

export default connect(mapStateToProps)(Achievement);
