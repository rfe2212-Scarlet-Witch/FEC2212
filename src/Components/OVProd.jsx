import React, {useEffect, useState} from 'react'
import config from '../../config.js';
import OVStyle from './OVStyle.jsx'

const axios = require('axios');

function OVProd (props) {
  console.log(props);

  const [currStyles, changeStyles] = useState([]);

  function handleClick () {
    axios.post('', {
      term: `/products/${props.product.id}/styles`,
    })
    .then((data) => {
      // console.log('this is the data', data.data)
      changeStyles(data.data.results);
    })
    .catch((err) => {
      // console.log('axios post for product data failed', err);
    });

  }

  return (
    <div >
      <div onClick={handleClick}>
        Product name: {props.product.name}
      </div>
      <div>
        ------------------
      </div>
        Product category: {props.product.category}
      <div>
        ------------------
      </div>
        Product description: {props.product.description}
      <div>
        ------------------
      </div>
      Styles:
        {currStyles.map((style, index) => {
          return <OVStyle style={style} key={index}/>
        })}
      <div>
        ------------------
      </div>
      <div>
        ------------------
      </div>
    </div>
  )
}

export default OVProd;