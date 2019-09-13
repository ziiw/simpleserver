const express = require('express');
const mongoose = require('mongoose');

const Catalog = require('./../models/catalog');
const Product = require('./../models/product');

const catalogRouter = express.Router();

catalogRouter.get('/catalogs', function(req, res) {
  Catalog
    .find()
    .populate('products')
    .exec(function(error, catalogs) {
      if (error) throw error;

      res.json({success: true, catalogs: catalogs});
    });
});

catalogRouter.get('/catalog/:id', function(req, res) {
  Catalog.findById(req.body.id , function(error, catalog) {
    if (error) throw error;

    res.json({success: true, catalog: catalog});
  });
});

catalogRouter.post('/catalogs', function(req, res) {
  const catalog = new Catalog(req.body.catalog)
  console.log(req.body)
  Product.find({
    '_id': { $in: req.body.productsID}
  }, function(error, products) {
    console.log(products)
    catalog.products = products
    
    catalog.save(function(error) {
      if (error) throw error;

      console.log('[Catalog] - Catalog added!');
      res.json({success: true, catalog: catalog});
    });
  })
});

module.exports = catalogRouter;
