const express = require('express');

const Order = require('./../models/order');

const ordersRouter = express.Router();

ordersRouter.get('/orders', function(req, res) {
  Order.find(function(error, orders) {
    if (error) throw error;

    res.json({success: true, orders});
  });
});

module.exports = ordersRouter;