import React, {useState} from 'react';

function OVStyle (props) {

  // const [check, setCheck] = useState(false);
  let check = check || false;

  function handleClick () {
    props.changeDisplayedStyle(props.currStyles[props.id])
    props.changeDisplayedPhoto(props.currStyles[props.id].photos[0].url)
  }
  console.log(props.displayedStyle);
  // if (props.displayedStyle === ) {
  //   if (props.displayedPhoto === props.style.photos[0].url) {
  //     check = true;
  //   }
  // }

  if (props.displayedStyle === props.style) {
    check = true;
  }
  // console.log('props.displayedPhoto, ', props.displayedPhoto);
  // console.log('props.style', props.style);



  return (
    <div onClickid={props.id}>
      <div id="checkmark">{check ? '☑' : ''}</div>
      <img id='style-photo' src={props.style.photos[0].thumbnail_url} onClick={handleClick}></img>
    </div>
  )
}

export default OVStyle;
