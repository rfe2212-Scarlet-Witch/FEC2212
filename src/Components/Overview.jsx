import React, {useEffect, useState} from 'react';
import config from '../../config.js';
import OVProd from './OVProd.jsx';
import OVStyle from './OVStyle.jsx';

const axios = require('axios');

function Overview (props) {






  return (
    <div>
      {props.currProd.name}

      <div>

      </div>
      {props.currStyles.map((style, index) => {
        return <OVStyle style={style} key={index}/>
      })}
    </div>
  )
}

export default Overview;