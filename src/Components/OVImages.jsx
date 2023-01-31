import React, {useState, useEffect} from 'react';
import OVCarouselImage from './OVCarouselImage.jsx';

function OVImages (props) {

  return (
    <div id='image-container'>
      <div id='image-carousel'>
        <div>
        {
          props.displayedStyle.photos.map((photo, i) => {
            return <OVCarouselImage displayedPhoto={props.displayedPhoto} changeDisplayedPhoto={props.changeDisplayedPhoto} displayedStyle={props.displayedStyle} changeDisplayedStyle={props.changeDisplayedStyle} key={i} photo={photo} i={i}/>
          })
        }
        </div>
      </div>
      <img id='image' className='center' src={props.displayedPhoto} ></img>
    </div>
  )
}
export default OVImages;

