import React from 'react';
import OVStyle from './OVStyle.jsx'

function OVProdInfo (props) {
  let oldPrice = '   '
  let currPrice = props.displayedStyle.original_price
  let textColor = 'black';
  if (props.displayedStyle.sale_price) {
    oldPrice = props.displayedStyle.original_price
    currPrice = `${props.displayedStyle.sale_price}  `
    textColor = 'red';
  }



  // let salePrice = ${props.displayedStyle.sale_price} || null;
  // let price = props.
  return (
    <div className='prodInfo'>
      <strong id='category' >
        {props.currProd.category}
      </strong>

      <strong id='prodName' >
        {props.currProd.name}
      </strong>

      <strong className='price'>
        <del id='salePrice' >
          {oldPrice}
        </del>

        <strong id='prodPrice' style={{color: textColor}}>
          {currPrice}
        </strong>
      </strong>

      <strong className='productStyle'>
        <strong id="stylePointer">
          Style >&nbsp;
        </strong>
        <strong id='styleName'>
          {props.displayedStyle.name}
        </strong>
      </strong>

      <div id='stylePhotos'>
        {props.currStyles.map((style, index) => {
          return <OVStyle displayedPhoto={props.displayedPhoto} changeDisplayedPhoto={props.changeDisplayedPhoto} currProd={props.currProd} changeProd={props.changeProd} currStyles={props.currStyles} changeStyles={props.changeStyles} displayedStyle={props.displayedStyle} changeDisplayedStyle={props.changeDisplayedStyle} style={style} key={index} id={index}/>
        })}
      </div>

      <div id="select-size-container">
        <select id="select-size">SELECT SIZE</select>
        <select id="select-amount">1</select>
      </div>

      <div id="bag-heart">
        <button>ADD TO BAG</button>
        <button>heart</button>
      </div>

    </div>
  )
}

export default OVProdInfo