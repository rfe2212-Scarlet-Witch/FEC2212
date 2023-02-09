import React, {useState, useEffect} from 'react';
import OVCarouselImage from './OVCarouselImage.jsx';
import Modal, { ModalBody, ModalFooter, ModalHeader } from './SharedComponents/Modal.jsx';

function OVImages (props) {

  const [displayIndex, changeIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [imageStyle, setImageStyle] = useState('image')
  const [rightArrow, setRightArrow] = useState('right-arrow')
  const [leftArrow, setLeftArrow] = useState('left-arrow')
  const [imageCarousel, setCarousel] = useState('image-carousel');
  const [top, setTop] = useState(true);
  const [carouselPhotos, setCarouselPhotos] = useState([]);

  let left = '←'
  let right ='→'

//when a new style gets displayed, we change the state of the currently displayed photo index to be the 0,
//which displays the first photo in that styles array of photos.
  useEffect(() => {
    changeIndex(0)
  }, [props.displayedStyle])

  //change index function for clicking the side thumbnails
  const changeIndexFunc = (index) => {
    changeIndex(index);
  }

  // add event listener that will return the user to basic overview by pressing escape key
  document.addEventListener('keydown', (e) => {
    if(e.key === "Escape") {
      setCarousel('image-carousel');
      setImageStyle('image');
      setRightArrow('right-arrow');
      setLeftArrow('left-arrow');
    }
  })

  //switch the display from image to expanded, then toggle between expanded and zoomed
  const clickImage = () => {
    if (imageStyle === 'image') {
      setCarousel('image-carousel-expanded');
      setImageStyle('expanded-image');
      setRightArrow('right-arrow-expanded');
      setLeftArrow('left-arrow-expanded');
    } else if (imageStyle === 'expanded-image') {
      setCarousel('image-carousel');
      setImageStyle('zoomed-image');
      setRightArrow('right-arrow-gone');
      setLeftArrow('left-arrow-gone');
      // document.getElementById('zoomed-image')
    } else {
      setCarousel('image-carousel-expanded');
      setImageStyle('expanded-image');
      setRightArrow('right-arrow-expanded');
      setLeftArrow('left-arrow-expanded');
    }
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
    props.changeDisplayedPhoto(props.displayedStyle.photos[newIndex].url)
  }

  const rightClick = () => {
    newIndex = displayIndex;
    newIndex++;
    changeIndex(newIndex);
    props.changeDisplayedPhoto(props.displayedStyle.photos[newIndex].url)
  }
  //*****************************
  //NICE MOUSE POSITION LOGGING EXAMPLE
  // document.addEventListener('mousemove', logKey);

  // function logKey(e) {

  //   let mousePosition = {
  //     x : e.clientX,
  //     y : e.clientY
  //   }
  //       console.log(`client x/y: ${e.clientX}, ${e.clientY}`);
  //       console.log(`client x/y: ${e.clientX}, ${e.clientY}`);
  // }

//when the image becomes zoomed, add an event listener to track user mouse position and transpose the image based on it
useEffect(() => {
  let img = document.getElementById('zoomed-image');
  if (img) {
    document.addEventListener('mousemove', (e) => {
      // img.style.cursor = `url('https://img.icons8.com/material-outlined/24/null/minus-math.png'), auto`;
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;
      img.style.transformOrigin = `${x*1 + 700}px ${y*2 + 1300}px`;
    })
  }
}, [imageStyle])

  let limCarousel = props.displayedStyle.photos.slice(0 , 7);
  let nextCarousel = props.displayedStyle.photos.slice(7, props.displayedStyle.photos.slice);

  // setCarouselPhotos(limCarousel);
  const bottomClick = () => {
    setTop(false);
    limCarousel = props.displayedStyle.photos.slice(7, props.displayedStyle.photos.length);
  }

  const topClick = () => {
    setTop(true);
  }

  return (
    <div id='image-container'>
      <div id={imageCarousel}>
        <div id="carousel-up" onClick={topClick}>
        {!top ? '↑' : ''}
        </div>
        <div>
        {
          limCarousel.map((photo, i) => {
            return <OVCarouselImage changeIndexFunc={changeIndexFunc} displayedPhoto={props.displayedPhoto} changeDisplayedPhoto={props.changeDisplayedPhoto} displayedStyle={props.displayedStyle} changeDisplayedStyle={props.changeDisplayedStyle} key={i} photo={photo} i={i}/>
          })
        }
        </div>
        <div id="carousel-down" onClick={bottomClick}>
        {top ? '↓' : ''}
        </div>
      </div>

      <img id={imageStyle} onClick={clickImage} className='center' src={props.displayedPhoto} ></img>
      <div id={leftArrow} onClick={leftClick}>{left}</div>
      <div id={rightArrow} onClick={rightClick}>{right}</div>

    </div>
  )
}
export default OVImages;

