import React, {useEffect, useState} from 'react';
import config from '../../config.js';

import OVProdName from './OVProdName.jsx';

const axios = require('axios');

function Overview () {



  const [currProds, changeProds] = useState([])

  //pull API data upon page render
  useEffect(() => {
    axios.post('', {
      term: '/products',
      AUTH: config.TOKEN
    })
    .then((data) => {
      changeProds(data.data)
      console.log('this is the data', data.data)
    })
    .catch((err) => {
      console.log('axios post for product data failed', err);
    });
  }, []);


  //tester click function to pull API data
  // function handleClick1 () {
  //   axios.post('', {
  //     term: '/products',
  //     AUTH: config.TOKEN
  //   })
  //   .then((data) => {
  //     prodData = data.data;
  //     console.log('this is the data', data.data)
  //   })
  //   .catch((err) => {
  //     console.log('axios post for product data failed', err);
  //   });

  // }

  //tester function to pull SPECIFIC product info


  return (
    <div>
      PRODUCTS
      <div>
      --------------------------------------------------------------------------------
      </div>
      {currProds.map((product, index) => {
        return <OVProdName product={product} key={index}/>
      })}
    </div>
  )
}

export default Overview;