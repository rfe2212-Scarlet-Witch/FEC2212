const axios = require ('axios');
const config = require ('../config.js');
let getProductInfo = (term) => {
  // console.log('currently searching API at extension:', term)
  let options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe${term}`,
    headers: {
      Authorization: config.TOKEN,
    },
    params: {
      count: 5
    }
  };

  return axios(options);
}

let getProductReviews = (term, product_id) => {
  // console.log('currently searching API at extension:', term)
  let options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe${term}`,
    headers: {
      Authorization: config.TOKEN,
    },
    params: {
      count: 5,
      product_id: product_id
    }
  };

  return axios(options);
}

let getProductQuestions = (term, product_id) => {
  //console.log(product_id)
  let options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe${term}`,
    headers: {
      Authorization: config.TOKEN,
    },
    params: {
      product_id: product_id,
      count: 200
    }
  };

  return axios(options);
}

let updatePuts = (term) => {
  let options = {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe${term}`,
    headers: {
      Authorization: config.TOKEN,
    },
  };

  return axios(options);
}

module.exports.getProductInfo = getProductInfo;
module.exports.getProductReviews = getProductReviews;
module.exports.getProductQuestions = getProductQuestions;
module.exports.updatePuts = updatePuts;