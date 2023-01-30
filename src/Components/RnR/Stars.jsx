import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Rating from '@mui/material/Rating'
import LoadedBars from './LoadedBars.jsx'
// import styled from '@emotion/styled'




var Stars = (props) => {


  var allReviews = props.allReviews;


  var calculateStars = () => {
    var sumStars = 0;
    var sumRecommend = 0;
    var sumFive = 0;
    var sumFour = 0;
    var sumThree = 0;
    var sumTwo = 0;
    var sumOne = 0;

    var count = allReviews.length;
    var totalPossibleStars = count * 5;
    var ret = {};

    for (var i = 0; i < allReviews.length; i ++) {
      sumStars += allReviews[i].rating;
      (allReviews[i].recommend) ? sumRecommend ++ : null;
      if (allReviews[i].rating === 5) {
        sumFive++;
      } else if (allReviews[i].rating === 4) {
        sumFour++;
      }else if (allReviews[i].rating === 3) {
        sumThree++;
      }else if (allReviews[i].rating === 2) {
        sumTwo++;
      }else if (allReviews[i].rating === 1) {
        sumOne++;
      }
    }

    ret.avgStars = ((sumStars / totalPossibleStars) * 5)
    ret.avgRecommend = ((sumRecommend/count) * 100);
    ret.five = (sumFive/count) * 100;
    ret.four = (sumFour/count) * 100;
    ret.three = (sumThree/count) * 100;
    ret.two = (sumTwo/count) * 100;
    ret.one = (sumOne/count) * 100;
    return ret;
  }
  var dataStore = calculateStars();
  var averageStars = dataStore.avgStars;
  // setRating(dataStore.avgStars);
  var averageRec = dataStore.avgRecommend;
  var five = dataStore.five;
  var four = dataStore.four;
  var three = dataStore.three;
  var two = dataStore.two;
  var one = dataStore.one;





  return (
    <>
        <div>
          {averageStars}
            <div>
              {averageRec + '%' + ' of reviewers recommend this product'}
            </div>
          <Rating  readOnly={true} precision={1/4} value={averageStars} size={'small'}/>
          <LoadedBars one={one} two={two} three={three} four={four} five={five}/>
        </div>

    </>
  )
}

export default Stars;