import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
const axios = require('axios');

var RnR = (props) => {
  var currentProduct = props.currProd;

  const [currReviews, setCurrReviews] = useState([])




  return (
    <>
    <div>{console.log('this is the Reviews Data', currReviews)}</div>
    </>
  )
}

export default RnR;