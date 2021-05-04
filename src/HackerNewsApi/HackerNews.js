import React, { useState, useEffect } from "react";
import { getStoriesId } from "./ApiFetch";
import { Story } from "../Showdata/Story";

export const HackerNews = ({ type, resCount }) => {
  const [storyId, setId] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getStoriesId(type).then((data) => {
      setId(data);
      setIsLoading(false);
    });
  }, [setId]);
  return (
    <React.Fragment>
      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        storyId.slice(resCount, resCount + 3).map((item) => {
          return (
            <div className="story-container">
              <Story key={item} StoryIdprop={item} />
            </div>
          );
        })
      )}
    </React.Fragment>
  );
};
