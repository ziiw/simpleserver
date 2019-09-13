const express = require('express');

const Customer = require('./../models/customer');

const customersRouter = express.Router();

customersRouter.get('/customers', function(req, res) {
  Customer.find()
    .populate('orders')
    .exec(function(error, customers) {
    if (error) throw error;

    res.json({success: true, customers});
  });
});

customersRouter.get('/order/:id', function(req, res) {
  Order.findById(req.body.id , function(error, customer) {
    if (error) throw error;

    res.json({success: true, customer});
  });
});

customersRouter.post('/customers', function(req, res) {
  const customer = new Customer(req.body.customer)

  customer.save(function(error) {
    if (error) throw error;
    
    res.json({success: true});  
    console.log('[Customer] - Customer added!');
  })
});

module.exports = customersRouter;