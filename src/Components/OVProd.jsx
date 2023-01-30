import React, {useEffect, useState} from 'react'
import config from '../../config.js';
import OVStyle from './OVStyle.jsx'
import OVImages from './OVImages.jsx';
import OVProdInfo from './OVProdInfo.jsx';

const axios = require('axios');

function OVProd (props) {



  function handleClick () {
    axios.post('', {
      term: `/products/${props.product.id}/styles`,
    })
    .then((data) => {
      changeStyles(data.data.results);
    })
    .catch((err) => {
      console.log('error', err);
    });

  }

  return (
    <div className="currentProduct" id='OVProd'>
      <div currStyles={props.currStyles} >
        <OVImages displayedStyle={props.displayedStyle} changeDisplayedStyle={props.changeDisplayedStyle}/>
      </div>
      <div>
        <OVProdInfo currProd={props.currProd} changeProd={props.changeProd} currStyles={props.currStyles} changeStyles={props.changeStyles} displayedStyle={props.displayedStyle} changeDisplayedStyle={props.changeDisplayedStyle}/>
      </div>
    </div>
  )
}

export default OVProd;

{/* <div>
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
</div> */}