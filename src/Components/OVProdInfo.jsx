import React, {useState, useEffect} from 'react';
import OVStyle from './OVStyle.jsx';
import { BsTwitter } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';
import {FacebookShareButton, FacebookIcon, PinterestShareButton, PinterestIcon, TwitterShareButton, TwitterIcon} from "react-share";
import Rating from '@mui/material/Rating'

function OVProdInfo (props) {
  let oldPrice = '   '
  let currPrice = `$${props.displayedStyle.original_price}`
  let textColor = 'black';

  const [currAmountArray, setAmountArray] = useState([]);
  const [currAmount, setAmount] = useState('');
  const [currSize, setSize] = useState('');
  const [disabled, changeDisabled] = useState(true);
  const [cart, setCart] = useState([]);
  const [heart, setHeart] = useState('false');
  // const [amountTextState, setAmountTextState] = useState('-')

  let array = []
  let size = '';
  let amount = '';
  // let disabled = false;


  //add to cart click handler
  const handleClick = () => {
    let newItem = {
      product: props.currProd.name,
      productSku: props.currProd.id,
      styleSku: props.displayedStyle.style_id,
      styleName: props.displayedStyle.name,
      size: currSize,
      quantity: currAmount,
      thumbnail: props.displayedStyle.photos[0].thumbnail_url
    }
    let copyCart = cart;
    if (!document.getElementById('select-size').value) {
      document.getElementById('alert-message').removeAttribute('hidden');
    }

    copyCart.push(newItem);
    setCart(copyCart);
    // console.log('your cart, ', cart);
    }

  //handleChange for the quantity selector
  const handleChangeAmount = (e) => {
    amount = Number(e.target.value) + 1;
    setAmount(amount);
  }

  //handleChange for the size selector
  const handleChange = (e) => {
    let i = 1;
    array = [];
    //create an array for the quantity selector to map through
    if (fakeObj[e.target.value] !== undefined) {
    while (i <= fakeObj[e.target.value].quantity && i<=15) {
      array.push(i);
      i++;
    }


    document.getElementById('select-amount').removeAttribute('disabled');
    size = fakeObj[e.target.value].size;
    setSize(size);
    setAmountArray(array);
    }
    else {
    // console.log('should be changing text');
    // setAmountTextState('-');
    }

  }
  // document.getElementById('select-amount').value === undefined
  if (document.getElementById('select-size') === null) {
    // console.log('inside new');
  }

  //change sale price
  if (props.displayedStyle.sale_price) {
    oldPrice = `$${props.displayedStyle.original_price}`
    currPrice = `$${props.displayedStyle.sale_price}  `
    textColor = 'red';
  }

  let amountText =  '-';
  //set the font of the size selector based on disabled state
  let font = 'OUT OF STOCK'

  //set fakeObj to the displayed styles skus.
  let fakeObj = props.displayedStyle.skus || {fakeKey: 'fakeValue'};


  //if the product has sizes availabe, remove disabled attribute and change the default text to SELECT SIZE
  if (Object.keys(fakeObj).length > 1) {
    document.getElementById("select-size").removeAttribute('disabled');
    document.getElementById('default').setAttribute('disabled', true);
    document.getElementById('cart').removeAttribute('hidden', true);

    //if size is selected and no amount selected, default to 1 quantity
    if (document.getElementById('select-size').value && !document.getElementById('select-amount').value) {
      // document.getElementById("default-size").setAttribute('disabled', true);
      document.getElementById('select-amount').value = 0;
    }
    font = 'SELECT SIZE'; //this line changes the text inside of the size selector
  }

  const handleHeart = () => {
    // if (heart='♡') {
    //   heart='♥';
    // } else {
    //   heart='♡';
    // }
    setHeart(!heart);
  }

  let currMeta = props.currMeta;
  var five = 0;
  var four = 0;
  var three = 0;
  var two = 0;
  var one = 0;
  var sum = 0;
  var didNotRecommend = 0;
  var didRecommend = 0;


  if (currMeta.ratings) {
    five = parseInt(currMeta.ratings[5]);
    four = parseInt(currMeta.ratings[4]);
    three = parseInt(currMeta.ratings[3]);
    two = parseInt(currMeta.ratings[2]);
    one = parseInt(currMeta.ratings[1]);
    didNotRecommend = parseInt(currMeta.recommended[false]);
    didRecommend = parseInt(currMeta.recommended[true]);
  }


  sum = five + four + three + two + one;

  var averageStars = (((five * 5) + (four * 4) + (three * 3)  + (two * 2) + one) / ((five + four + three + two + one)  * 5)) * 100;
  // console.log(((five * 5) + (four * 4) + (three * 3)  + (two * 2) + one));
  // console.log(((five + four + three + two + one)  * 5))

  var recTotal = didNotRecommend + didRecommend;
  var percentRec = (didRecommend/recTotal) * 100;


  return (
    <div className='prodInfo'>
      <div>
        <Rating  readOnly={true} precision={1/4} value={(averageStars/100) * 5} size={'large'}/>
        <u id='view-reviews'>view reviews</u>
      </div>
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

      <div id='alert-message' hidden>Please select a size</div>

      <div id="select-size-container">

        <select onChange={handleChange} id="select-size" disabled>
        <option id="default-size" value="">{font}</option>
        {Object.keys(fakeObj).map((key) => {
          return <option  key={key} value={key}>{fakeObj[key].size}</option>
        })}
        </select>

        <select onChange={handleChangeAmount} id="select-amount" disabled>
          <option id='default' value=''>-</option>
          {currAmountArray.map((value, key) => {
            return <option key={key} value={key}>{value}</option>
          })}
        </select>
      </div>



      <div id="cart-heart">
        <button id='cart' onClick={handleClick} hidden>ADD TO CART</button>
        {/* <button id='heart' onClick={handleHeart}>{!heart ? '♥' : '♡'}</button> */}
        <button id="view-cart">VIEW CART</button>

      </div>

      <div id="social">

            <TwitterShareButton url={"twitter.com"} >
              <TwitterIcon size={40} round={true}/>
            </TwitterShareButton>
            <div>

            </div>

            <PinterestShareButton url={"pinterest.com"} >
              <PinterestIcon size={40} round={true}/>
            </PinterestShareButton>


            <FacebookShareButton url={"facebook.com"} >
              <FacebookIcon size={40} round={true}/>
            </FacebookShareButton>


      </div>


    </div>
  )
}

export default OVProdInfo



// OLD SIZE SELECTOR

// {if (Object.keys(fakeObj).length > 1)
//   (
//    <select onChange={handleChangeAmount} id="select-amount" disabled>
//       <option value=''>SELECT AMOUNT</option>
//            {currAmountArray.map((value, key) => {
//            return <option key={key} value={key}>{value}</option>
//          })}
//       </select>
//  )


// }