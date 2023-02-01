import React, {useState, useEffect} from 'react';
import OVCarouselImage from './OVCarouselImage.jsx';

function OVImages (props) {

  const [displayIndex, changeIndex] = useState(0);

  let left = '←'
  let right ='→'

  useEffect(() => {
    let newIndex=0;
    // console.log('inside the use effect');
    // console.log(newIndex);
  }, [props.displayedStyle])

  if (props.displayedPhoto===props.displayedStyle.photos[0].url) {
    left = '';
  } else {
    left = '←'
  }

  if (props.displayedPhoto===props.displayedStyle.photos[5].url) {
    right = '';
  } else {
    // console.log(newIndex)
    right = '→'
  }

  let newIndex = newIndex || 0;

  const leftClick = () => {
    console.log('props.displayedPhoto ', props.displayedPhoto)
    newIndex = displayIndex;
    newIndex--;
    changeIndex(newIndex);
    props.changeDisplayedPhoto(props.displayedStyle.photos[newIndex].url)
  }

  const rightClick = () => {
    console.log(props.displayedPhoto)
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
            return <OVCarouselImage displayedPhoto={props.displayedPhoto} changeDisplayedPhoto={props.changeDisplayedPhoto} displayedStyle={props.displayedStyle} changeDisplayedStyle={props.changeDisplayedStyle} key={i} photo={photo} i={i}/>
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

