const express = require('express');

const Product = require('./../models/product');

const productRouter = express.Router();

productRouter.get('/products', function(req, res) {
  Product.find(function(error, products) {
    if (error) throw error;

    res.json({success: true, data: products});
  });
});

productRouter.post('/products', function(req, res) {
  const products = new Product(req.body)
  
  // save the sample user
  products.save(function(error) {
    if (error) throw error;

    console.log('[Product] - Product added!');
    res.json({success: true});
  });
});

module.exports = productRouter;
