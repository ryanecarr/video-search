import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoClick }) => {
  const list = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        id={video.id.videoId}
        video={video}
        onVideoClick={onVideoClick}
      />
    );
  });
  return <div className='ui divided stackable items'>{list}</div>;
};

export default VideoList;
