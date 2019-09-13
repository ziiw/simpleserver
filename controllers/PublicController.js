const express = require('express');

const Product = require('./../models/product');
const Order = require('./../models/order');

const publicRouter = express.Router();

publicRouter.get('/products', function(req, res) {
  Product.find(function(error, products) {
    if (error) throw error;

    res.json({success: true, products});
  });
});

// We will create the order under the hood, via a callback of Stripe for example
// publicRouter.post('/order', function(req, res) {
//   const order = new Order(req.body)
//   order.status = 'waiting payment'
  
//   // save the sample user
//   order.save(function(error) {
//     if (error) throw error;

//     console.log('[Order] - New order!');
//     res.json({success: true});
//   });
// });

module.exports = publicRouter;