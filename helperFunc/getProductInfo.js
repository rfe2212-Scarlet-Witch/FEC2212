const axios = require ('axios');
const config = require ('../config.js');
let getProductInfo = (term) => {
  // console.log('currently searching API at extension:', term)
  let options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe${term}`,
    headers: {
      Authorization: config.TOKEN
    }
  };

  return axios(options);
}

module.exports.getProductInfo = getProductInfo;