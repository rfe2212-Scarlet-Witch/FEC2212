import React, {useState} from 'react';
import OVStyle from './OVStyle.jsx'

function OVProdInfo (props) {
  let oldPrice = '   '
  let currPrice = `$${props.displayedStyle.original_price}`
  let textColor = 'black';

  const [currAmountArray, setAmountArray] = useState([]);
  const [currAmount, setAmount] = useState('');
  const [currSize, setSize] = useState('');
  const [disabled, changeDisabled] = useState(true);
  const [cart, setCart] = useState([]);

  let array = []
  let size = '';
  let amount = '';
  // let disabled = false;


  //handleClick for the add to bag button
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
    copyCart.push(newItem);
    setCart(copyCart);
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
    while (i <= fakeObj[e.target.value].quantity) {
      array.push(i);
      i++;
    }
    size = fakeObj[e.target.value].size;
    setSize(size);
    setAmountArray(array);
  }

  if (props.displayedStyle.sale_price) {
    oldPrice = `$${props.displayedStyle.original_price}`
    currPrice = `$${props.displayedStyle.sale_price}  `
    textColor = 'red';
  }

    //set the font of the size selector based on disabled state
    let font = 'OUT OF STOCK'
    // if (disabled) {
    //   font = 'OUT OF STOCK';
    // } else {
    //   font = 'SELECT SIZE';
    // }

  //set fakeObj to the displayed styles skus.
  let fakeObj = props.displayedStyle.skus || {fakeKey: 'fakeValue'};


  //if the product has sizes availabe, remove disabled attribute and change the default text to SELECT SIZE
  if (Object.keys(fakeObj).length > 1) {
    document.getElementById("select-size").removeAttribute('disabled');
    document.getElementById('select-amount').removeAttribute('disabled');
    font = 'SELECT SIZE';
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

        <select onChange={handleChange} id="select-size" disabled>
        <option  value="">{font}</option>
        {Object.keys(fakeObj).map((key) => {
          return <option  key={key} value={key}>{fakeObj[key].size}</option>
        })}
        </select>

        <select onChange={handleChangeAmount} id="select-amount" disabled>
          <option value=''>SELECT AMOUNT</option>
          {currAmountArray.map((value, key) => {
            return <option key={key} value={key}>{value}</option>
          })}
        </select>


      </div>

      <div id="bag-heart">
        <button onClick={handleClick}>ADD TO BAG</button>
        <button>heart</button>
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