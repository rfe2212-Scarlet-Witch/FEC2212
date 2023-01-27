import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
const axios = require('axios');

var RnR = () => {

  const [currReviews, setCurrReviews] = useState([])

  //pull API data upon page render
  useEffect(() => {
    axios.post('', {
      term: '/reviews',
      AUTH: config.TOKEN
    })
    .then((data) => {
      setCurrReviews(data.data)
      console.log('this is the data For Ratings and Reviews', data.data)
    })
    .catch((err) => {
      // console.log('axios post for product data failed', err);
    });
  }, []);


  return (
    <div>
      Ratings And Reviews
      <div>
      --------------------------------------------------------------------------------
      </div>
      {currReviews.map((review, index) => {
        return <ReviewName product={review} key={index}/>
      })}
    </div>
  )
}

export default RnR;