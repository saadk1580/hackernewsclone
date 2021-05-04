import React, { useEffect, useState } from "react";
import { getStory } from "../HackerNewsApi/ApiFetch";
import "./Story.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

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
    } else if (seconds < 60) {
      return "few seconds ago";
    }
  };

  return (
    <a rel="noreferrer" href={story.url} target="_blank" className="storyLink">
      <div className="storyContainer">
        <p className="title">{story.title}</p>
        <div className="discription">
          <p className="discription">
            {!story.text ? (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                consequuntur optio sit deserunt praesentium nemo.
              </p>
            ) : (
              <p>{story.text}</p>
            )}
          </p>
        </div>
        <div className="details">
          <FontAwesomeIcon icon={faClock} className="clock" />

          {convertUnix(story.time) +
            " | " +
            (!story.descendants ? 0 : story.descendants) +
            " comments"}
        </div>
      </div>
    </a>
  );
};
