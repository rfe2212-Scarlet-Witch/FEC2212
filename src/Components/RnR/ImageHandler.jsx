import React, {useEffect, useState} from 'react';
import config from '../../../config.js';


var ImageHandler = (props) => {

var renderPics = props.renderPics;
// console.log('Rendering This', renderThis)
var [showImage, setShowImage] = useState(false);

var show =() => {
  setShowImage(!showImage)
}

var style = {
  imageDefault : {
    maxHeight: '100px',
    maxWidth: '100px',
  },
  showImage : {
    position: 'relative',
    // width: "500px",
    // height: "500px",
    // width: "100vw",
    // height: "100vh",
    // zIndexs: '500px'
    alignItems: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
    alignItems: 'center',
    objectFit: 'contain'
  }
}

var render = () => {
  if (showImage) {
    return renderPics.map((pic) => (<div><img id='image' src={pic} key={pic.id} onClick={show} style={style.showImage}></img></div>))
  } else {
    return renderPics.map((pic) => (<img id='image' src={pic} key={pic.id} onClick={show} style={style.imageDefault}></img>))
  }
}

return (
  <>
  {render()}
  </>
)


}

export default ImageHandler;