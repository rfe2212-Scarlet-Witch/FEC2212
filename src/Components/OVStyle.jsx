import React, {useState} from 'react';

function OVStyle (props) {

  let check = check || false;

  function handleClick () {
    props.changeDisplayedStyle(props.currStyles[props.id])
    console.log(props.id);
    console.log(props.currStyles[props.id]);
    props.changeDisplayedPhoto(props.currStyles[props.id].photos[0].url)
  }

  if (props.displayedStyle === props.style) {
    check = true;
  }

  return (
    <div onClick={handleClick} id={props.id}>
      <div id="checkmark">{check ? '☑' : ''}</div>
      <img id='style-photo' src={props.style.photos[0].thumbnail_url} onClick={handleClick}></img>
    </div>
  )
}

export default OVStyle;
