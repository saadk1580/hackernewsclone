import { useState, useEffect } from "react";
import { getStoriesId } from "./ApiFetch";
import { Story } from "../Showdata/Story";

export const HackerNews = (props) => {
  const [storyId, setId] = useState([]);
  useEffect(() => {
    getStoriesId().then((data) => setId(data));
  }, []);

  return storyId.slice(0, props.numStories).map((item) => {
    return <Story key={item} StoryIdprop={item} />;
  });
};
