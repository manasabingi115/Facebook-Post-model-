import React from 'react';

export default function RenderGIF({
  data,
  displayGIF,
  isLoading,
  setSearchGIF,
  setPostData,
}) {
  const [border, setBorder] = React.useState('');
  const Render = () => {
    return (
      <div>
        {data &&
          data.map((gif) => (
            <div key={gif.id}>
              <img
                onClick={() => {
                  setBorder(gif.id);
                  setPostData((prevState) => ({
                    ...prevState,
                    GIF: gif.images.fixed_height.url,
                  }));
                }}
                className={border === gif.id ? 'img-border' : null}
                src={gif.images.fixed_height.url}
                width="200"
                height="200"
                alt="gif"
              />
            </div>
          ))}
      </div>
    );
  };
  console.log(border);
  console.log(isLoading);

  return (
    <div>
      <input
        placeholder="GIF"
        type="text"
        onChange={(e) => setSearchGIF(e.target.value)}
      ></input>
      <br />
      <br />
      {isLoading ? <p>Loading...</p> : <Render />}
    </div>
  );
}
