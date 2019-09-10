const express = require('express');

const Order = require('./../models/order');

const ordersRouter = express.Router();

ordersRouter.get('/orders', function(req, res) {
  Order.find(function(error, orders) {
    if (error) throw error;

    res.json({success: true, orders});
  });
});

ordersRouter.get('/order/:id', function(req, res) {
  Order.findById(req.body.id , function(error, cataorderlog) {
    if (error) throw error;

    res.json({success: true, order: order});
  });
});

module.exports = ordersRouter;