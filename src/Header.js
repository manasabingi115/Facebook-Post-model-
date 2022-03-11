import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-options">
          <div className="header-elements border-right">
            <FontAwesomeIcon icon={faPen} className="header-icons" />
            <strong>Compose Post</strong>
          </div>
          <div className="header-elements border-right">
            <FontAwesomeIcon icon={faImage} className="header-icons" />
            <strong>Photo/Video Album</strong>
          </div>
          <div className="header-elements">
            <FontAwesomeIcon icon={faVideo} className="header-icons" />
            <strong>Live Video</strong>
          </div>
        </div>
        <FontAwesomeIcon icon={faClose} className="header-icon-cancel" />
      </div>
    </div>
  );
}
