import React, {useEffect, useState} from 'react';
import './index.scss';
import Overview from './Components/Overview.jsx';
import QnA from './Components/QnA/QandA.jsx'
import RnR from './Components/RnR/RnR.jsx'
//import for reviews
const axios = require('axios');

function App() {

  const [currProducts, changeProducts] = useState([]);//current array
  const [currProd, changeProd] = useState([]);//current product that is displayed
  const [currStyles, changeStyles] = useState([]); //all styles for the currently rendered product
  const [displayedStyle, changeDisplayedStyle] = useState({photos: [{}]});//currently displayed style inside the image gallery  const [currReviews, setCurrReviews] = useState([]);
  const [currReviews, setCurrReviews] = useState([]); //All reviews for the current product
  const [currMeta, setCurrMeta] = useState([]);
  const [currQuestions, setCurrQuestions] = useState([]);

  useEffect(() => {
    axios.post('', {
      term: '/products',
    })
    .then((data) => {

      changeProducts(data.data);//update the current products
      changeProd(data.data[0]);//update the currently displayed product

      //communicate with server, fetch api data for styles
      axios.post('', {
        term: `/products/${data.data[0].id}/styles`,
      })
      .then((data) => {
        changeStyles(data.data.results); //update the current styles for the currently displayed product
        changeDisplayedStyle(data.data.results[0]); //update the currently displayed style
      })
      .catch((err) => {
        console.log('axios post for product data failed', err);
      });

      axios.post('/questions', {
        term: '/qa/questions/',
         product_id: data.data[0].id
      })
      .then((data) => {
        setCurrQuestions(data.data.results[0])
      })
      .catch((err) => {
        console.log(err)
      })

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
      axios.post('/revs', {
        term: '/reviews/meta',
        product_id: data.data[0].id
      })
      .then((data) => {
        // console.log('this is the REVIEWS data', data.data);
        setCurrMeta(data.data);
        // console.log('Meta Results', data.data);
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
      <Overview displayedStyle={displayedStyle} changeDisplayedStyle={changeDisplayedStyle} currStyles={currStyles} changeStyles={changeStyles} currProd={currProd} changeProd={changeProd} currProducts={currProducts} changeProducts={changeProducts}/>
      <QnA currProd={currProd} changeProd={changeProd} currProducts={currProducts} changeQuestion={setCurrQuestions} currQuestion={currQuestions} changeProducts={changeProducts}/>
      <div className="review-comp">To be used by review component</div>
      <RnR currProd={currProd} changeProd={changeProd} currProducts={currProducts} changeProducts={changeProducts} currReviews={currReviews} currMeta={currMeta}/>
    </div>
  );
}

export default App;