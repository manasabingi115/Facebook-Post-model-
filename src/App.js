import React from 'react';
import './style.css';
import RenderGIF from './RenderGIF';

export default function App() {
  const [searchGIF, setSearchGIF] = React.useState('hello');
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [displayGIF, setDisplayGIF] = React.useState(false);
  const [totalPostedData, setTotalPostedData] = React.useState([]);
  const [postData, setPostData] = React.useState({
    text: '',
    GIF: '',
  });

  React.useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchGIF}&api_key=YK63OGoaLmUWrTUU6LnW1sGekNWXcYQM&limit=10`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setIsLoading(false);
      });
  }, [searchGIF]);
  console.log(totalPostedData);
  const handleChange = (e) => {
    setPostData((prevState) => ({
      ...prevState,
      text: e.target.value,
    }));
  };
  const HandlePost = () => {
    return (
      <div>
        {totalPostedData?.map((data, index) => (
          <div key={index}>
            <p>{data.text}</p>
            <img src={data.GIF} />
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <input
        placeholder="Write Something here..."
        onChange={handleChange}
      ></input>
      <br />
      <br />
      <button type="button" onClick={() => setDisplayGIF(true)}>
        GIF
      </button>
      <br />
      <br />
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
        />
      )}
      <button
        onClick={(e) => {
          e.preventDefault();
          setTotalPostedData([...totalPostedData, postData]);
        }}
      >
        Post
      </button>
      <HandlePost />
    </div>
  );
}
