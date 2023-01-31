import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import ReviewTile from './ReviewTile.jsx'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

var SortedReviews = (props) => {

  var filterToNum = {
    5: 'Five Stars',
    4: 'Four Stars',
    3: 'Three Stars',
    2: 'Two Stars',
    1: 'One Stars'
  }
  var filteredReviews = [];

  var allReviews = props.allReviews;
  var filters = props.filters;
  if (filters.length > 0) {
    for (var i = 0; i < allReviews.length; i++) {
      if (filters.includes(filterToNum[allReviews[i].rating])) {
        filteredReviews.push(allReviews[i]);
      }
    }
  } else {
    filteredReviews = allReviews;
  }


  var toRender =[];
  var helpfulFirst = [];
  // console.log(props.sort)
  var [count, setcount] = useState(2);
  var relevantFirst = [];
  var newestFirst=[];


  if (props.sort === 'Helpful') {
    for(var i = 0; i < count && i < filteredReviews.length; i++) {
      if (filteredReviews[i].helpfulness) {
        helpfulFirst.unshift(filteredReviews[i])
      } else {
        helpfulFirst.push(filteredReviews[i]);
      }
    }
    toRender = [...helpfulFirst];
  } else if (props.sort === 'Newest') {
    newestFirst = [...filteredReviews];
    newestFirst.sort((a,b) => {
      return a.date < b.date
    })
    // console.log('newest first', newestFirst);
    for (var i = 0; i < count && i < newestFirst.length; i++) {
      toRender.push(newestFirst[i]);
    }
  }

  var showMore = () => {
    setcount(count + 2);
  }

  return (
    <>
    <div>
    {toRender.map((render) => (
        <ListItem className="ReviewTile" key={render.review_id}><ReviewTile renderThis={render}/></ListItem>
     ))
    }
    <button onClick={showMore}>Show More</button>
    </div>
    </>

  )

}

export default SortedReviews;