import React from 'react';
import './style.css';

export default function App() {
  const [inputValue, setInputValue] = React.useState();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?q=${inputValue}&api_key=YK63OGoaLmUWrTUU6LnW1sGekNWXcYQM&limit=5`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data.data);
      });
  }, []);
  console.log(inputValue);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <br />
      <br />
      {data &&
        data.map((gif) => (
          <div key={gif.id}>
            {/* <p>{gif.id}</p> */}
            <img src={gif.images.fixed_height.url} />
          </div>
        ))}
    </div>
  );
}
