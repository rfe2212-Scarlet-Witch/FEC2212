import React from 'react';

function OVStyle (props) {

  function handleClick () {
    props.changeDisplayedStyle(props.currStyles[props.id])
  }


  return (
    <div id={props.id}>
      <img id='style-photo' src={props.style.photos[0].thumbnail_url} onClick={handleClick}></img>
    </div>
  )
}

export default OVStyle;

//width='100' height='150'