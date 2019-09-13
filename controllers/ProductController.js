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
  if (!Array.isArray(req.body.products)) res.json({success: false})
  
  req.body.products.forEach(p => {
    const product = new Product(p)

    product.save(function(error) {
      if (error) throw error;

      console.log('[Product] - Product added!');
    })
  });

  res.json({success: true});  
});

productRouter.post('/product/:id', function(req, res) {
  const product = req.body.product
  const query = {_id: product._id}
  Product.findOneAndUpdate(query, product, error => {
    if (error) return res.json({success: false, message: 'Failed to save in DB.'})
    return res.json({success: true})
  })
});

module.exports = productRouter;
