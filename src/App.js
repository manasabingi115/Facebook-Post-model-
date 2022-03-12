import React from 'react';
import './style.css';
import Header from './Header';
import Colors from './Colors';
import RenderGIF from './RenderGIF';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Buttons from './Buttons';
import PostFeed from './PostFeed';

const API_KEY = 'YK63OGoaLmUWrTUU6LnW1sGekNWXcYQM';
const initialState = { user: 'Manasa Bingi', text: '', GIF: '', BGColor: '' };

const initialTotalPostData = JSON.parse(localStorage.getItem('postData')) || [];

console.log(initialTotalPostData);
export default function App() {
  const [searchGIF, setSearchGIF] = React.useState('hello'); // by default fetching hello gifs.
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [displayGIF, setDisplayGIF] = React.useState(false);
  const [totalPostedData, setTotalPostedData] =
    React.useState(initialTotalPostData);
  const [postData, setPostData] = React.useState(initialState);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchGIF}&api_key=${API_KEY}&limit=20`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setIsLoading(false);
      });
  }, [searchGIF]);

  const handleChange = (e) => {
    setPostData((prevState) => ({
      ...prevState,
      text: e.target.value,
    }));
  };

  const setTotalPostedDataWithPersist = (postData) => {};

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedPostData = [postData, ...totalPostedData];
    setTotalPostedData(updatedPostData);
    localStorage.setItem('postData', JSON.stringify(updatedPostData));
    setPostData(initialState);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Header />
        <div className="compose-highlighter"></div>
        <div className="text-container">
          <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
          <textarea
            required
            rows="3"
            value={postData.text}
            className="form-control form-control-lg"
            type="text"
            placeholder="Write Something here..."
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            marginBottom: '10px',
          }}
        >
          {postData.GIF && (
            <img
              style={{ borderRadius: '10px' }}
              src={postData.GIF}
              width="60%"
              height="300px"
              alt="posting-gif"
            />
          )}
        </div>
        <br />
        <Colors postData={postData} setPostData={setPostData} />
        <Buttons setDisplayGIF={setDisplayGIF} />

        {displayGIF && (
          <RenderGIF
            displayGIF={displayGIF}
            isLoading={isLoading}
            data={data}
            setData={setData}
            setSearchGIF={setSearchGIF}
            searchGIF={searchGIF}
            setPostData={setPostData}
            postData={postData}
            setDisplayGIF={setDisplayGIF}
          />
        )}
        <div className="post-container">
          <button className="only-me-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-lock-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>
            Only me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </div>
      </form>
      <PostFeed totalPostedData={totalPostedData} />
    </div>
  );
}
