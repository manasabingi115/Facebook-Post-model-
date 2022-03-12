import React from 'react';

export default function RenderGIF({
  data,
  isLoading,
  setSearchGIF,
  setPostData,
  setDisplayGIF,
}) {
  const [border, setBorder] = React.useState('');
  const Render = () => {
    return (
      <div className="GIF-block">
        {data.map((gif) => (
          <div key={gif.id}>
            <img
              onClick={(e) => {
                e.preventDefault();
                setBorder(gif.id);
                setDisplayGIF(false);
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

  return (
    <div className="GIF-container">
      <div className="GIF-part"></div>
      <input
        className="GIF-input form-control  form-control-sm"
        placeholder="Search GIF"
        type="text"
        onChange={(e) => setSearchGIF(e.target.value)}
      ></input>
      {isLoading ? <p>Loading...</p> : <Render />}
    </div>
  );
}
