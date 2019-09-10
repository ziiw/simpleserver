const express = require('express');

const Category = require('./../models/category');

const categoryRouter = express.Router();

categoryRouter.get('/categories', function(req, res) {
  Category.find(function(error, categories) {
    if (error) throw error;

    res.json({success: true, data: categories});
  });
});

categoryRouter.post('/categories', function(req, res) {
  const categories = new Category(req.body)
  
  // save the sample user
  categories.save(function(error) {
    if (error) throw error;

    console.log('[Category] - Category added!');
    res.json({success: true});
  });
});

module.exports = categoryRouter;
