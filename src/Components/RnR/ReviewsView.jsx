import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import RnR from './RnR.jsx'
import SortedReviews from './SortedReviews.jsx'

var ReviewsView = (props) => {
  var currReviews = props.allReviews;
  var filters = props.filters;
  var setFilters = props.setFilters;
  // var [sortBy, setSortBy] = useState('Newest')
  var reviewsSort = props.reviewsSort;
  var setReviewsSort = props.setReviewsSort;
  var reRender = props.reRender;

  var [count, setCount] = useState(2);


  var handleSort = (e) => {
    console.log('event', e.target.value)
    setCount(2);
    setReviewsSort(e.target.value);
    // reRender([]);

  }
  var styles={
    ReviewsView : {
      // border: '3px solid red',
      width: '100%',
      minWidth: '600px',
      height: '95%',
    },
    SortedReviews : {
      overflowY: 'scroll',
      height: '600px',
      padding: "3%",

      // border: '1px solid grey'
    }
  }

  return (
    <>
      <div style={styles.ReviewsView}>Reviews View
        <div>
          <div>
            {currReviews.length} reviews, sorted by
            <select value={reviewsSort} onChange={(e) => {handleSort(e)}}>
              <option value="newest">newest</option>
              <option value="helpful">helpful</option>
              <option value="relevant">relevant</option>
            </select>
            Filtered By: {filters.map((elem, index) => (<li key={index}>{elem}</li>))}
            {filters.length > 0 ? <button onClick={() => {setFilters([])}}>Reset Filters</button> : <div></div>}
          </div>
          <div style={styles.SortedReviews}>
            <SortedReviews reviewsSort={reviewsSort} allReviews={props.allReviews} filters={filters} reRender={reRender} setCount={setCount} count={count}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewsView;