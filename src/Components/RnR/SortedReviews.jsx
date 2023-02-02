import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import ReviewTile from './ReviewTile.jsx'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button'

var SortedReviews = (props) => {
  var reviewsSort = props.reviewsSort;
  var setReviewsSort = props.setReviewsSort;

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
  // toRender = props.allReviews;
  // var relevantFirst = [];
  // var newestFirst=[];

  for(var i = 0; i < count && i < filteredReviews.length; i++) {
    toRender.push(filteredReviews[i]);
  }

  var showMore = () => {
    setcount(count + 2);
  }

  var styles = {
    ListItem : {
        display: 'flex',
        flexDirection: 'column',
        // border: "4px solid green",
        maxHeight: '100%',
    }
  }

  return (
    <>
    <div>
    {toRender.map((render) => (
        <ListItem style={styles.ListItem} key={render.review_id}><ReviewTile renderThis={render} divider={true}/></ListItem>
     ))
    }
    </div>
    <div>
    {(count === toRender.length) ? <Button styles={styles.Button} onClick={showMore}>Show More</Button> : null}
    </div>
    </>

  )

}

export default SortedReviews;