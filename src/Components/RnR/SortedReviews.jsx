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
  var [count, setcount] = useState(0);

  if (props.sort === 'Helpful') {
    for(var i = 0; i < count && i < allReviews.length; i++) {
      if (allReviews[i].helpfulness) {
        helpfulFirst.unshift(allReviews[i])
      } else {
        helpfulFirst.push(allReviews[i]);
      }
    }
    toRender = helpfulFirst;
  }
  // console.log(toRender);

  var showMoreHelpful = () => {
    setcount(count + 2);
  }

  return (
    <>
    <div>
    {toRender.map((render) => (
      <ListSubheader>
        <ListItem className="ReviewTile"><ReviewTile renderThis={render}/></ListItem>
      </ListSubheader>))
    }
    <button onClick={props.sort === 'Helpful' ? showMoreHelpful : null}>Show More</button>
    </div>
    </>

  )

}

export default SortedReviews;