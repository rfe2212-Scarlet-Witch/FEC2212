import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Rating from '@mui/material/Rating'
import LoadedBars from './LoadedBars.jsx'




var Stars = (props) => {
  var filters = props.filters;
  var setFilters = props.setFilters;
  var currMeta = props.currMeta;

  var allReviews = props.allReviews;
  // console.log('In Stars Data: ', allReviews);

  var five = 0;
  var four = 0;
  var three = 0;
  var two = 0;
  var one = 0;
  var sum = 0;
  var didNotRecommend = 0;
  var didRecommend = 0;


  if (currMeta.ratings) {
    five = parseInt(currMeta.ratings[5]);
    four = parseInt(currMeta.ratings[4]);
    three = parseInt(currMeta.ratings[3]);
    two = parseInt(currMeta.ratings[2]);
    one = parseInt(currMeta.ratings[1]);
    didNotRecommend = parseInt(currMeta.recommended[false]);
    didRecommend = parseInt(currMeta.recommended[true]);
  }

  sum = five + four + three + two + one;

  var averageStars = (((five * 5) + (four * 4) + (three * 3)  + (two * 2) + one) / ((five + four + three + two + one)  * 5)) * 100;
  // console.log(((five * 5) + (four * 4) + (three * 3)  + (two * 2) + one));
  // console.log(((five + four + three + two + one)  * 5))

  var recTotal = didNotRecommend + didRecommend;
  var percentRec = (didRecommend/recTotal) * 100;




  var style = {
    Rating: {
      fontSize: '40px',
      // border: '1px solid black'
    }
  }



  return (
    <>
        <div>
          <div style={style.Rating}>
          {Math.floor(averageStars) + '%'}
          </div>
            <div>
              {Math.floor(percentRec) + '%' + ' of reviewers recommend this product'}
            </div>
          <Rating  readOnly={true} precision={1/4} value={(averageStars/100) * 5} size={'large'}/>
          <LoadedBars one={one} two={two} three={three} four={four} five={five} setFilters={setFilters} filters={filters} sum={sum}/>
        </div>

    </>
  )
}

export default Stars;