import "./seasons.css";
import React from "react";

const seasonConfig = {
  winter: {
    text: "Is so cold",
    iconName: "snowflake"
  },
  summer: {
    text: "Is so hot",
    iconName: "sun"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? seasonConfig.summer : seasonConfig.winter;
  } else {
    return lat > 0 ? seasonConfig.winter : seasonConfig.summer;
  }
};

const SeasonDisplay = props => {
  const { text, iconName } = getSeason(props.lat, new Date().getMonth());
  //   const text = season === "winter" ? "Is so cold" : "Is so hot";
  //   const iconName = season === "winter" ? "snowflake" : "sun";
  return (
    <div className={`season-display ${iconName}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
