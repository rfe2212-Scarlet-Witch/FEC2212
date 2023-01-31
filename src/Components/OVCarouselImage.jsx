import React from 'react';

function OVCarouselImage (props) {

  let borderVar = '';
  if (props.displayedPhoto === props.photo.thumbnail_url) {
    borderVar = '2px black solid';
  }

  return (

      <img onClick={() => {props.changeDisplayedPhoto(props.displayedStyle.photos[props.i].thumbnail_url)}} style={{border: borderVar}} className="carousel-image" src={props.photo.thumbnail_url}></img>

  )
}

export default OVCarouselImage;

// <div  onClick={() => {props.changeDisplayedPhoto(props.displayedStyle.photos[props.i].thumbnail_url)}} style={{border: borderVar}}>
//       <img className="carousel-image" src={props.photo.thumbnail_url}></img>
//     </div>