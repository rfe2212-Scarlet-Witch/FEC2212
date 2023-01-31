import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Stars from './Stars.jsx'
import ReviewsView from './ReviewsView.jsx'
import AddReview from './AddReview.jsx'
const axios = require('axios');
import Scales from './Scales.jsx'

var RnR = (props) => {
  var currentProduct = props.currProd;
  var currReviews = props.currReviews;
  var currMeta = props.currMeta;
  // console.log(currMeta);
  var [filters, setFilters] = useState([]);




  return (
      <>
        <div>Ratings & Reviews</div>
          <div className="Reviews">
            <div className="ReviewsLeft">
              <Stars  allReviews={currReviews} filters={filters} setFilters={setFilters} currMeta={currMeta}/>
              <Scales currMeta={currMeta}/>
            </div>
            <div className="ReviewsRight">
              <ReviewsView allReviews={currReviews} filters={filters} setFilters={setFilters}/>
              <div>
                <AddReview title={'Add Review'}/>
              </div>
            </div>

        </div>
    </>
  )
}

export default RnR;