const express = require('express');
let app = express();
const { getProductInfo, getProductReviews, getProductReviewsMeta , getProductQuestions, updatePuts, sendReviews} = require('../helperFunc/getProductInfo.js');


app.use(express.static('public'));
app.use(express.json());

app.post('/', function (req, res) {
  // console.log('req', req.body.term);
  let productData = getProductInfo(req.body.term);
  productData.then((data) => {
    // console.log(data.data);
    res.status(201).send(data.data);
  }).catch((err) => {
    console.log('error communicating with API', err);
  })

})

app.post('/revs', function (req, res) {
  console.log('sort by', req.body.sort)
  let productData = getProductReviews(req.body.term, req.body.product_id, req.body.sort);
  productData.then((data) => {
    res.status(201).send(data.data);
  }).catch((err) => {
    console.log('error communicating with API', err);
  })

})

app.post('/revPost', (req,res) => {
  // console.log(req.body.packet);
  sendReviews('/reviews', req.body.packet);

})

app.post('/revsMeta', function (req, res) {
  // console.log('sort by', req.body.sort)
  let productData = getProductReviewsMeta(req.body.term, req.body.product_id);
  productData.then((data) => {
    res.status(201).send(data.data);
  }).catch((err) => {
    console.log('error communicating with API', err);
  })

})

app.post('/questions', (req, res) => {
  getProductQuestions(req.body.term, req.body.product_id)
  .then((data) => {
    res.send(data.data);
  })
  .catch((err) => {res.send(err)})
})

app.put('/puts', (req, res) => {
  console.log(req.body.term)
  updatePuts(req.body.term)
  .then((data) => {
    res.send('sent')
  })
  .catch((err) => {console.log(err)})
})

let port = 1337;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
