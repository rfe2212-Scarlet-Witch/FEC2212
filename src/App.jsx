import React, {useEffect, useState} from 'react';
import './index.scss';
import Overview from './Components/Overview.jsx';
import QnA from './Components/QnA/QandA.jsx'
//import for reviews
const axios = require('axios');

function App() {

  const [currProd, changeProd] = useState([]);

  var prodArray = [];

  useEffect(() => {
    axios.post('', {
      term: '/products',
    })
    .then((data) => {
      prodArray = data.data;
      changeProd(data.data[0])
      console.log('this is the data', data.data)
    })
    .catch((err) => {
      console.log('axios post for product data failed', err);
    });
  }, []);


  return (
    <div className="app">
      <Overview currProd={currProd} changeProd={changeProd} prodArray={prodArray}/>
      <QnA currProd={currProd} changeProd={changeProd} prodArray={prodArray}/>
      <div className="review-comp">To be used by review component</div>
    </div>
  );
}

export default App;