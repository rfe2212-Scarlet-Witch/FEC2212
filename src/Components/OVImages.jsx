import React, {useState, useEffect} from 'react';
import OVCarouselImage from './OVCarouselImage.jsx';

function OVImages (props) {

  const [displayIndex, changeIndex] = useState(0);

  let left = '←'
  let right ='→'

  useEffect(() => {
    changeIndex(0)
  }, [props.displayedStyle])

  //change index function for clicking the side thumbnails
  const changeIndexFunc = (index) => {
    changeIndex(index);
  }



  if (props.displayedPhoto===props.displayedStyle.photos[0].url) {
    left = '';
  } else {
    left = '←'
  }

  let indexMax = Object.keys(props.displayedStyle.photos).length - 1 || 0;
  if (props.displayedPhoto===props.displayedStyle.photos[indexMax].url) {
    right = '';
  } else {
    // console.log(newIndex)
    right = '→'
  }

  let newIndex = newIndex || 0;

  const leftClick = () => {
    newIndex = displayIndex;
    newIndex--;
    changeIndex(newIndex);
    console.log('trying to set props.displayedStyle.photos at index ', newIndex);
    props.changeDisplayedPhoto(props.displayedStyle.photos[newIndex].url)
  }

  const rightClick = () => {
    newIndex = displayIndex;
    newIndex++;
    changeIndex(newIndex);
    props.changeDisplayedPhoto(props.displayedStyle.photos[newIndex].url)
  }

  return (
    <div id='image-container'>
      <div id='image-carousel'>
        <div>
        {
          props.displayedStyle.photos.map((photo, i) => {
            return <OVCarouselImage changeIndexFunc={changeIndexFunc} displayedPhoto={props.displayedPhoto} changeDisplayedPhoto={props.changeDisplayedPhoto} displayedStyle={props.displayedStyle} changeDisplayedStyle={props.changeDisplayedStyle} key={i} photo={photo} i={i}/>
          })
        }
        </div>
      </div>
      <div id='left-arrow' onClick={leftClick}>{left}</div>
      <img id='image' className='center' src={props.displayedPhoto} ></img>
      <div id='right-arrow' onClick={rightClick}>{right}</div>
    </div>
  )
}
export default OVImages;

