import React from 'react';

function OVCarouselImage (props) {
  let thing = null;
  let borderVar = '';
  let opacityVar  = '50%';
  if (props.displayedPhoto === props.photo.url) {
    borderVar = '2px black solid';
    opacityVar = '100%';
    thing = 'selected-style-image';
  }


  const handleClick = () => {
    props.changeDisplayedPhoto(props.displayedStyle.photos[props.i].url);
    props.changeIndexFunc(props.i);
  }
  return (

      <img id={thing || props.id} onClick={handleClick} style={{border: borderVar}} className="carousel-image" src={props.photo.thumbnail_url}></img>

  )
}

export default OVCarouselImage;

// <div  onClick={() => {props.changeDisplayedPhoto(props.displayedStyle.photos[props.i].thumbnail_url)}} style={{border: borderVar}}>
//       <img className="carousel-image" src={props.photo.thumbnail_url}></img>
//     </div>

