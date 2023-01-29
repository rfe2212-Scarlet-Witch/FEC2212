import React, {useEffect, useState} from 'react';
import config from '../../config.js';
import OVProd from './OVProd.jsx';
import OVStyle from './OVStyle.jsx';
import OVImages from './OVImages.jsx';

const axios = require('axios');

function Overview (props) {






  return (
    <div id='Overview'>
      <strong className='text'>
        {props.currProd.name}
      </strong>
      <section>
        <div currStyles={props.currStyles} >
          <OVImages displayedStyle={props.displayedStyle} changeDisplayedStyle={props.changeDisplayedStyle}/>
        </div>
      </section>
      <aside id='Styles'>
      {props.currStyles.map((style, index) => {
        return <OVStyle currStyles={props.currStyles} changeStyles={props.changeStyles} displayedStyle={props.displayedStyle} changeDisplayedStyle={props.changeDisplayedStyle} style={style} key={index} id={index}/>
      })}
      </aside>
    </div>
  )
}

export default Overview;