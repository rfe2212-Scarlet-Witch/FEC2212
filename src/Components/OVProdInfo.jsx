import React from 'react';
import OVStyle from './OVStyle.jsx'

function OVProdInfo (props) {

  return (
    <div id="prodInfo">
      <strong className='text'>
        {props.currProd.name}
      </strong>
      <div id='ProdInfo'>
        {props.currStyles.map((style, index) => {
          return <OVStyle currProd={props.currProd} changeProd={props.changeProd} currStyles={props.currStyles} changeStyles={props.changeStyles} displayedStyle={props.displayedStyle} changeDisplayedStyle={props.changeDisplayedStyle} style={style} key={index} id={index}/>
        })}
      </div>
    </div>
  )
}

export default OVProdInfo