const axios = require("axios").default;
const { default: Axios } = require("axios");

const url = "https://api.twitter.com/1.1/search/tweets.json";

class Twitter {
  get(query, count) {
    return axios.get(url, {
      params: {
        q: query,
        count: count,
        tweet_mode: "extended",
      },
      headers: {
        // This is for authorization
        Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
      },
    });
  }
}

module.exports = Twitter;
