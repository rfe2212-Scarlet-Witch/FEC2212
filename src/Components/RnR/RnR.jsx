import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Stars from './Stars.jsx'
import ReviewsView from './ReviewsView.jsx'
import AddReview from './AddReview.jsx'
const axios = require('axios');
import Scales from './Scales.jsx'
import Card from '@mui/material/Card'


var RnR = (props) => {
  var currentProduct = props.currProd;
  var currReviews = props.currReviews;
  var currMeta = props.currMeta;
  // console.log(currMeta);
  var [filters, setFilters] = useState([]);
  var reviewsSort = props.reviewsSort;
  var setReviewsSort = props.setReviewsSort;
  var reRender = props.reRender;


  var styles = {
    ReviewsRight : {
      paddingLeft: "2.5%",
      paddingTop: "2.5%",
      paddingBottom: "2.5%",
      paddingRight:"2.5%",
      maxWidth: "100%",
      maxHeight: "100%",
      // overflow: 'scroll',
      // border: "1px solid blue",
      flexGrow: 2
    },
    ReviewsLeft : {
      paddingLeft: "5%",
      paddingTop: "5%",
      paddingBottom: "5%",
      paddingRight:"5%",
      maxWidth: "40%",
      // border: "3px solid red",
      minWidth: "30%"
    },
    Reviews : {
      display: "flex",
      justifyContent: "row",
      // border: "1px solid black",
      justifyContent: "space-evenly",
      borderRadius: '15px'

    },
    box: {
      // border: "1px solid red"
    },
    card : {
      background: '#d3d3d3',
      borderRadius: '20px'
    },
    leftCard: {
      padding: '10px',
      borderRadius: '10px'
    }
  }

  return (
      <>
        <div>
          Ratings & Reviews
        </div>
          <Card raised={true} style={styles.card}>
            <div style={styles.Reviews}>
              <div style={styles.ReviewsLeft}>
                <Card style={styles.leftCard}>
                <Stars  allReviews={currReviews} filters={filters} setFilters={setFilters} currMeta={currMeta}/>
                <Scales currMeta={currMeta}/>
                </Card>
              </div>
              <div>
              <div style={styles.ReviewsRight}>
                <ReviewsView allReviews={currReviews} filters={filters} setFilters={setFilters} reviewsSort={reviewsSort} setReviewsSort={setReviewsSort} reRender={reRender}/>
              </div>
              <div>
                <AddReview title={'Add Review'} currentProduct={currentProduct} currMeta={currMeta}/>
              </div>
            </div>
        </div>
        </Card>

    </>
  )
}

export default RnR;