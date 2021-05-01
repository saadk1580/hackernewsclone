import React, { useEffect, useState } from "react";
import { getStory } from "../HackerNewsApi/ApiFetch";

export const Story = ({ StoryIdprop }) => {
  const [story, setStory] = useState([]);
  useEffect(() => {
    getStory(StoryIdprop).then((data) => setStory(data));
  });

  const convertUnix = (ts) => {
    var d = new Date(); // Gets the current time
    var nowTs = Math.floor(d.getTime() / 1000); // getTime() returns milliseconds, and we need seconds, hence the Math.floor and division by 1000
    var seconds = nowTs - ts;
    var day = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var month = Math.floor(day / 12 - d.getMonth());
    var year = Math.floor(day / 365);
    // more that two days
    if (seconds > 2 * 24 * 3600) {
      if (day < 30) {
        return `${day} days ago`;
      } else if (day >= 30 && day < 365) {
        return month === 1 ? `${month} month ago` : `${month} months ago`;
      } else if (day >= 365) {
        return year === 1 ? `${year} year ago` : `${year} years ago`;
      }
    }
    // a day
    else if (seconds > 24 * 3600) {
      return `${day} day ago`;
    } else if (seconds > 3600) {
      return `${h} hours ago`;
    } else if (seconds > 60) {
      return Math.floor(seconds / 60) + " minutes ago";
    }
  };

  return (
    <div>
      <h3>{story.title}</h3>
      <p>
        {convertUnix(story.time) + " | " + story.descendants + " comments"}{" "}
      </p>
      <p>{story.text}</p>
    </div>
  );
};
