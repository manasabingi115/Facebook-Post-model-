import React from 'react';

const colorsArr = [
  'white',
  'Turquoise',
  'HotPink',
  'lightpink',
  'Tomato',
  'Plum',
  'thistle',
  'Gainsboro',
  'wheat',
  'yellowgreen',
  'yellow',
  'LightGreen',
  'aliceblue',
  'DarkOrchid',
  'powderblue',
  'Lavender',
];

export default function Colors({ postData, setPostData }) {
  return (
    <div className="colors-container">
      {colorsArr.map((color, index) => (
        <div
          key={index}
          style={{ backgroundColor: color }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: color,
            }))
          }
          className={
            postData.BGColor === color ? 'selected-color colors' : 'colors'
          }
        ></div>
      ))}
    </div>
  );
}
