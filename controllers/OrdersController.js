const express = require('express');

const Order = require('./../models/order');

const ordersRouter = express.Router();

ordersRouter.get('/orders', function(req, res) {
  Order.find()
    .populate('products')
    .populate('customer')
    .exec(function(error, orders) {
    if (error) throw error;

    res.json({success: true, orders});
  });
});

ordersRouter.get('/order/:id', function(req, res) {
  Order.findById(req.body.id , function(error, order) {
    if (error) throw error;

    res.json({success: true, order: order});
  });
});

ordersRouter.post('/orders', function(req, res) {
  const order = new Order(req.body.order)

  order.save(function(error) {
    if (error) throw error;
    
    res.json({success: true});  
    console.log('[Order] - Order added!');
  })
});

module.exports = ordersRouter;