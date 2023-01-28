import React, {useEffect, useState} from 'react';
import './index.scss';
import Overview from './Components/Overview.jsx';
import QnA from './Components/QnA/QandA.jsx'
import RnR from './Components/RnR/RnR.jsx'
//import for reviews
const axios = require('axios');

function App() {
  const [currProducts, changeProducts] = useState([]);
  const [currProd, changeProd] = useState([]);
  const [currStyles, changeStyles] = useState([]); //all styles for the currently rendered product
  const [currReviews, setCurrReviews] = useState([]);


  useEffect(() => {
    axios.post('', {
      term: '/products',
    })
    .then((data) => {

      changeProducts(data.data);
      changeProd(data.data[0])

      //communicate with server, fetch api data for styles
      axios.post('', {
        term: `/products/${data.data[0].id}/styles`,
      })
      .then((data) => {
        // console.log('this is the data styles data', data.data)
        changeStyles(data.data.results);
      })
      .catch((err) => {
        console.log('axios post for product data failed', err);
      });


      axios.post('/revs', {
        term: '/reviews/',
        product_id: data.data[0].id
      })
      .then((data) => {
        // console.log('this is the REVIEWS data', data.data);
        setCurrReviews(data.data.results)
      })
      .catch((err) => {
        throw err;
      });

      //this is the array of products received upon page render
      // console.log('this is the data', data.data);
    })
    .catch((err) => {
      // console.log('axios post for product data failed', err);
    });


  }, []);




  return (
    <div className="app">
      <Overview currStyles={currStyles} changeStyles={changeStyles} currProd={currProd} changeProd={changeProd} currProducts={currProducts} changeProducts={changeProducts}/>
      <QnA currProd={currProd} changeProd={changeProd} currProducts={currProducts} changeProducts={changeProducts}/>
      <div className="review-comp">To be used by review component</div>
      <RnR currProd={currProd} changeProd={changeProd} currProducts={currProducts} changeProducts={changeProducts} currReviews={currReviews}/>
    </div>
  );
}

export default App;