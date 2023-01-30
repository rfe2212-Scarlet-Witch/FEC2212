import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import ReviewTile from './ReviewTile.jsx'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

var SortedReviews = (props) => {
  var allReviews = props.allReviews;

  var toRender =[];
  var helpfulFirst = [];
  // console.log(props.sort)
  var [count, setcount] = useState(2);
  var relevantFirst = [];
  var newestFirst=[];

  if (props.sort === 'Helpful') {
    for(var i = 0; i < count && i < allReviews.length; i++) {
      if (allReviews[i].helpfulness) {
        helpfulFirst.unshift(allReviews[i])
      } else {
        helpfulFirst.push(allReviews[i]);
      }
    }
    toRender = helpfulFirst;
  } else if (props.sort === 'Newest') {
    newestFirst = [...allReviews];
    newestFirst.sort((a,b) => {
      return a.date < b.date
    })
    for (var i = 0; i < newestFirst.length && i < count; i++) {
      toRender.push(newestFirst[i]);
    }
  }
  // console.log(toRender);

  var showMore = () => {
    setcount(count + 2);
  }

  return (
    <>
    <div>
    {toRender.map((render) => (
        <ListItem className="ReviewTile"><ReviewTile renderThis={render}/></ListItem>
     ))
    }
    <button onClick={showMore}>Show More</button>
    </div>
    </>

  )

}

export default SortedReviews;