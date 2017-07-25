import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const url = video.snippet.thumbnails.default.url;
  return (
    <li
      onClick={() => onVideoSelect(video)}
      className="list-group-item"
    >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={url} alt={video.snippet.title} />
        </div>
        <div className="media-body">
          {video.snippet.title}
        </div>
      </div>
    </li >
  );
};

export default VideoListItem;

