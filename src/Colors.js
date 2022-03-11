import React from 'react';

export default function Colors({ postData, setPostData }) {
  return (
    <div className="colors-container">
      <div className="colors-semi-container">
        <div
          className={
            postData.BGColor === 'white' ? 'selected-color colors' : 'colors'
          }
          style={{ backgroundColor: 'white' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'white',
            }))
          }
        ></div>
        <div
          className={
            postData.BGColor === 'purple' ? 'selected-color colors' : 'colors'
          }
          style={{ backgroundColor: 'purple' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'purple',
            }))
          }
        ></div>
        <div
          className={
            postData.BGColor === 'navy' ? 'selected-color colors' : 'colors'
          }
          style={{ backgroundColor: 'navy' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'navy',
            }))
          }
        ></div>
        <div
          className={
            postData.BGColor === 'lightpink'
              ? 'selected-color colors'
              : 'colors'
          }
          style={{ backgroundColor: 'lightpink' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'lightpink',
            }))
          }
        ></div>
        <div
          className={
            postData.BGColor === 'red' ? 'selected-color colors' : 'colors'
          }
          style={{ backgroundColor: 'red' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'red',
            }))
          }
        ></div>
        <div
          className={
            postData.BGColor === 'black' ? 'selected-color colors' : 'colors'
          }
          style={{ backgroundColor: 'black' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'black',
            }))
          }
        ></div>
        <div
          className={
            postData.BGColor === 'thistle' ? 'selected-color colors' : 'colors'
          }
          style={{ backgroundColor: 'thistle' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'thistle',
            }))
          }
        ></div>
        <div
          className={
            postData.BGColor === 'blueviolet'
              ? 'selected-color colors'
              : 'colors'
          }
          style={{ backgroundColor: 'blueviolet' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'blueviolet',
            }))
          }
        ></div>
      </div>
      <div className="colors-semi-container">
        <div
          className={
            postData.BGColor === 'wheat' ? 'selected-color colors' : 'colors'
          }
          style={{ backgroundColor: 'wheat' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'wheat',
            }))
          }
        ></div>
        <div
          className={
            postData.BGColor === 'yellowgreen'
              ? 'selected-color colors'
              : 'colors'
          }
          style={{ backgroundColor: 'yellowgreen' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'yellowgreen',
            }))
          }
        ></div>
        <div
          className={
            postData.BGColor === 'yellow' ? 'selected-color colors' : 'colors'
          }
          style={{ backgroundColor: 'yellow' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'yellow',
            }))
          }
        ></div>
        <div
          className={
            postData.BGColor === 'cornflowerblue'
              ? 'selected-color colors'
              : 'colors'
          }
          style={{ backgroundColor: 'cornflowerblue' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'cornflowerblue',
            }))
          }
        ></div>
        <div
          className={
            postData.BGColor === 'darkgreen'
              ? 'selected-color colors'
              : 'colors'
          }
          style={{ backgroundColor: 'darkgreen' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'darkgreen',
            }))
          }
        ></div>
        <div
          className={
            postData.BGColor === 'brown' ? 'selected-color colors' : 'colors'
          }
          style={{ backgroundColor: 'brown' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'brown',
            }))
          }
        ></div>
        <div
          className={
            postData.BGColor === 'teal' ? 'selected-color colors' : 'colors'
          }
          style={{ backgroundColor: 'teal' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'teal',
            }))
          }
        ></div>
        <div
          className={
            postData.BGColor === 'darkslateblue'
              ? 'selected-color colors'
              : 'colors'
          }
          style={{ backgroundColor: 'darkslateblue' }}
          onClick={() =>
            setPostData((prevState) => ({
              ...prevState,
              BGColor: 'darkslateblue',
            }))
          }
        ></div>
      </div>
    </div>
  );
}
