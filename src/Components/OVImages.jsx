import React, {useState, useEffect} from 'react';

function OVImages (props) {

  return (
    <div id='image-container'>
      <img id='image' className='center' src={props.displayedStyle.photos[0].thumbnail_url} ></img>

    </div>
  )
}
export default OVImages;