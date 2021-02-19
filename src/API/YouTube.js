import axios from 'axios';

const KEY = 'AIzaSyALqFXRLesKZaCmDxjri2DrhYEB9PVi9Fc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
});
