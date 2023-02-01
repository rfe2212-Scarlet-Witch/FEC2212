import React from 'react';

function OVStyle (props) {

  function handleClick () {
    props.changeDisplayedStyle(props.currStyles[props.id])
    props.changeDisplayedPhoto(props.currStyles[props.id].photos[0].url)
  }


  return (
    <div id={props.id}>
      <img id='style-photo' src={props.style.photos[0].thumbnail_url} onClick={handleClick}></img>
    </div>
  )
}

export default OVStyle;
