import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import RnR from './RnR.jsx'
import SortedReviews from './SortedReviews.jsx'

var ReviewsView = (props) => {
  var currReviews = props.allReviews;
  var [sortBy, setSortBy] = useState('relevance')

  var handleSort = (e) => {
    console.log(e.target.value);
    setSortBy(e.target.value);
  }
  return (
    <>
      <div>Reviews View</div>
      <div>
        {currReviews.length} reviews, sorted by
          <select value={sortBy} onChange={(e) => {handleSort(e)}}>
            <option value="relevance">Relevance</option>
            <option value="Helpful">Helpful</option>
          </select>
          <SortedReviews sort={sortBy} allReviews={props.allReviews} sortBy={sortBy}/>
      </div>
    </>
  )
}

export default ReviewsView;