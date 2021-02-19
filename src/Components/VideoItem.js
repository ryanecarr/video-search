import React from 'react';

const VideoItem = ({ id, video, onVideoClick }) => {
  return (
    <>
      <div className='item' onClick={() => onVideoClick(id)}>
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
      <div className='ui section divider'></div>
    </>
  );
};

export default VideoItem;
