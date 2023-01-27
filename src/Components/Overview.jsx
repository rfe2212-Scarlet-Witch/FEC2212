import React from 'react';
import config from '../../config.js';
const axios = require('axios');

function Overview () {

  function handleClick () {
    axios.post('/products', {
      term: '/products',
      AUTH: config.TOKEN
    })
    .then((data) => {
      // console.log('this is the data', data)
    })
    .catch((err) => {
      console.log('u idiot, axios post for produc data failed', err);
    });

  }

  return (
    <div>
      hello world i am the overview haha asdf
      <button onClick={handleClick}>submit get request for product info</button>
    </div>
  )
}

export default Overview;