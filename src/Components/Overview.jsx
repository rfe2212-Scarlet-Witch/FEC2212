import React, {useEffect, useState} from 'react';
import config from '../../config.js';
import OVProd from './OVProd.jsx';

const axios = require('axios');

function Overview (props) {

  const [currProds, changeProds] = useState([])


  // useEffect(() => {
  //   axios.post('', {
  //     term: '/products',
  //   })
  //   .then((data) => {
  //     changeProds(data.data)
  //     console.log('this is the data', data.data)
  //   })
  //   .catch((err) => {
  //     console.log('axios post for product data failed', err);
  //   });
  // }, []);

  return (
    <div>
      {props.currProd.name}
      PRODUCTS
      STYLES WILL APPEAR WHEN CLICKED
      <div>
      --------------------------------------------------------------------------------
      </div>
      {currProds.map((product, index) => {
        return <OVProd product={product} key={index}/>
      })}
    </div>
  )
}

export default Overview;