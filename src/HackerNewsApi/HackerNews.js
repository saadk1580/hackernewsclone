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
  }, []);
  return (
    <React.Fragment>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        storyId.slice(resCount, resCount + 3).map((item) => {
          return <Story key={item} StoryIdprop={item} />;
        })
      )}
    </React.Fragment>
  );
};
