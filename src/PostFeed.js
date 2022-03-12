import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function PostFeed({ totalPostedData }) {
  return (
    <div className="posts-container">
      {totalPostedData.length > 0 && <h1 className="post-title">Posts:</h1>}

      {totalPostedData?.map((data, index) => (
        <div
          key={index}
          className="post"
          style={{ backgroundColor: data.BGColor }}
        >
          <h3 className="user-post">
            <FontAwesomeIcon icon={faUserCircle} className="posted user-icon" />
            {data.user}
          </h3>
          <p className="comment-text">{data.text}</p>
          {data.GIF && (
            <img src={data.GIF} width="100%" height="400px" alt="posted-gif" />
          )}
        </div>
      ))}
    </div>
  );
}
