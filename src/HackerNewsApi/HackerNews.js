import React, { useState, useEffect } from "react";
import { getStoriesId } from "./ApiFetch";
import { Story } from "../Showdata/Story";

export const HackerNews = ({ type, resCount }) => {
  //Fetching storyId and storing in storyId array
  const [storyId, setId] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getStoriesId(type).then((data) => {
      setId(data);
      setIsLoading(false);
    });
  }, [type]);

  //Displaying the story and privding props using .mao method to
  //iterate over the storyId array
  return (
    <React.Fragment>
      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        storyId.slice(resCount, resCount + 10).map((item) => {
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
