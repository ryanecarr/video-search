import React, { useState, useEffect } from 'react';
import youtube from './API/YouTube';
import SearchBar from './Components/SearchBar.js';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';
import SuggestedTags from './Components/SuggestedTags';
import Error from './Components/Error';
import seedData from './seedData';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearchSubmit = async (term) => {
    setLoading(true);
    return await youtube
      .get('/search', {
        params: {
          q: term,
        },
      })
      .then((response) => {
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(`${error}`);
      });
  };

  useEffect(() => {
    onSearchSubmit(seedData[Math.floor(Math.random() * seedData.length + 1)]);
  }, []);

  return (
    <div className='ui grid container main'>
      {error != null ? (
        <div className='sixteen wide column'>
          <Error error={error} />
        </div>
      ) : (
        <>
          <div className='seven wide column centered'>
            <SearchBar loading={loading} onSearchSubmit={onSearchSubmit} />
          </div>
          <div className='sixteen wide column'>
            <SuggestedTags tags={seedData} onTagClick={onSearchSubmit} />
          </div>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList videos={videos} onVideoClick={setSelectedVideo} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
