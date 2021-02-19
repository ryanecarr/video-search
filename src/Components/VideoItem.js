import React from 'react';

const VideoItem = ({ video, onVideoClick }) => {
  return (
    <>
      <div className='item video-item' onClick={() => onVideoClick(video)}>
        <div className='ui tiny image'>
          <img
            src={video.snippet.thumbnails.default.url}
            alt={video.snippet.title}
          />
        </div>
        <div className='content'>
          <strong>{video.snippet.title}</strong>
          <div className='meta'>
            <span>{video.snippet.channelTitle}</span>
          </div>
          <div className='description'>
            <p>{video.snippet.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoItem;
