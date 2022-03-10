import React from 'react';
import './style.css';
import RenderGIF from './RenderGIF';

export default function App() {
  const [searchGIF, setSearchGIF] = React.useState('hello');
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [displayGIF, setDisplayGIF] = React.useState(false);
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
  // console.log(postData);
  const handleChange = (e) => {
    setPostData((prevState) => ({
      ...prevState,
      text: e.target.value,
    }));
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
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
          setSearchGIF={setSearchGIF}
          searchGIF={searchGIF}
          setPostData={setPostData}
          postData={postData}
        />
      )}
    </div>
  );
}
