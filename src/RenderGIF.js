import React from 'react';

export default function RenderGIF({
  data,
  displayGIF,
  isLoading,
  setSearchGIF,
  postData,
  setPostData,
}) {
  const Render = () => {
    //   const handleChange = (gif) => {
    //     setPostData((prevState) => ({
    //       ...prevState,
    //       GIF: gif.images.fixed_height.url,
    //     }));
    //   };
    return (
      <div>
        {data &&
          data.map((gif) => (
            <div key={gif.id}>
              <img
                onClick={() =>
                  setPostData((prevState) => ({
                    ...prevState,
                    GIF: gif.images.fixed_height.url,
                  }))
                }
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
  console.log(postData);
  return (
    <div>
      <input
        placeholder="GIF"
        type="text"
        onChange={(e) => setSearchGIF(e.target.value)}
      ></input>
      <br />
      <br />
      {displayGIF && (isLoading ? <p>Loading...</p> : <Render />)}
    </div>
  );
}
