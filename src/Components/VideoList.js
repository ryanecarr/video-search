import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoClick }) => {
  const list = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoClick={onVideoClick}
      />
    );
  });
  return (
    <>
      {videos.length ? (
        <div className='ui divided stackable items'>{list}</div>
      ) : (
        <div className='ui active centered inline loader'></div>
      )}
    </>
  );
};

export default VideoList;
