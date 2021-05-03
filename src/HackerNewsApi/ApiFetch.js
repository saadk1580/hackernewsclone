import * as axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (item) => {
  const res = await axios
    .get(`${storyUrl + item}.json`)
    .then(({ data }) => data);
  return res;
};

export const getStoriesId = async (params) => {
  console.log(params);
  const res = await axios
    .get(`${baseUrl + params}stories.json`)
    .then(({ data }) => data);
  return res;
};
