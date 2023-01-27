const express = require('express');
let app = express();
const { getProductInfo } = require('../helperFunc/getProductInfo.js');


app.use(express.static('public'));
app.use(express.json());

app.post('', function (req, res) {
  console.log(req.body.term);
  let productData = getProductInfo(req.body.term);
  productData.then((data) => {
    // console.log(data.data);
    res.status(201).send(data.data);
  }).catch((err) => {
    console.log('error communicating with database', err);
  })

})

let port = 1337;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
