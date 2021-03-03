import axios from 'axios';

const BASE_URL = process.env.REACT_APP_YOUTUBE_BASEURL;
const KEY = process.env.REACT_APP_YOUTUBE_APIKEY;

export default axios.create({
  baseURL: BASE_URL,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
});
