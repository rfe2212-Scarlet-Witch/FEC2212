import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Stars from './Stars.jsx'
import ReviewsView from './ReviewsView.jsx'
const axios = require('axios');

var RnR = (props) => {
  var currentProduct = props.currProd;
  var currReviews = props.currReviews;



  return (
      <>
        <div>Ratings & Reviews</div>
          <div className="Reviews">
            <div className="ReviewsLeft">
              <Stars  allReviews={currReviews}/>
            </div>
            <div className="ReviewsRight">
              <ReviewsView allReviews={currReviews}/>
            </div>
        </div>
    </>
  )
}

export default RnR;