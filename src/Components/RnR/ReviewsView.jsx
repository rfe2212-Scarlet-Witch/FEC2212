import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import RnR from './RnR.jsx'
import SortedReviews from './SortedReviews.jsx'

var ReviewsView = (props) => {
  var currReviews = props.allReviews;
  var filters = props.filters;
  var setFilters = props.setFilters;
  var [sortBy, setSortBy] = useState('Newest')

  var handleSort = (e) => {

    setSortBy(e.target.value);
  }
  return (
    <>
      <div>Reviews View</div>
      <div>
        {currReviews.length} reviews, sorted by
          <select value={sortBy} onChange={(e) => {handleSort(e)}}>
            <option value="Newest">Newest</option>
            <option value="Helpful">Helpful</option>
            <option value="Relevant">Relevant</option>
          </select>
          Filtered By: {filters.map((elem) => (<li>{elem}</li>))}
          {filters.length > 0 ? <button onClick={() => {setFilters([])}}>Reset Filters</button> : <div></div>}

          <SortedReviews sort={sortBy} allReviews={props.allReviews} sortBy={sortBy} filters={filters}/>
      </div>
    </>
  )
}

export default ReviewsView;