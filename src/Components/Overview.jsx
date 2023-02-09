import React, {useEffect, useState} from 'react';
import config from '../../config.js';
import OVProd from './OVProd.jsx';
import OVStyle from './OVStyle.jsx';
import OVImages from './OVImages.jsx';

const axios = require('axios');

function Overview (props) {



  return (
    <div>
      <div id="header">
        <strong onClick={() => console.log(props.arrayOfClicks)}id='title'>
          BIZARRE BAZAAR
        </strong>
      </div>
      <div id="message" >
        Welcome to bizarre bazaar! All products are completely free! Just pay shipping, handling, and a small processing fee equivalent to the price of the product!
      </div>
      <div className="OVProd">
      <OVProd currMeta={props.currMeta} displayedPhoto={props.displayedPhoto} changeDisplayedPhoto={props.changeDisplayedPhoto} currProd={props.currProd} changeProd={props.changeProd} currStyles={props.currStyles} changeStyles={props.changeStyles} displayedStyle={props.displayedStyle} changeDisplayedStyle={props.changeDisplayedStyle}/>
      </div>

    </div>
  )
}

export default Overview;

