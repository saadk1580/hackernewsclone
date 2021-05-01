import * as axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const storiesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (item) => {
  const res = await axios
    .get(`${storyUrl + item}.json`)
    .then(({ data }) => data);
  return res;
};

export const getStoriesId = async () => {
  const res = await axios.get(storiesUrl).then(({ data }) => data);
  return res;
};
