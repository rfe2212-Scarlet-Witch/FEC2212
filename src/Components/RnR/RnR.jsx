import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Stars from './Stars.jsx'
const axios = require('axios');

var RnR = (props) => {
  var currentProduct = props.currProd;
  var currReviews = props.currReviews;



  return (
    <>
    <div>Ratings & Reviews</div>
    <Stars allReviews={currReviews}/>
    </>
  )
}

export default RnR;