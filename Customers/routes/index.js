var express = require('express');
var router = express.Router();

var Customer = require('../models/customer');

router.get('/', function (req, res, next) {

  var options = {
    lean: true,
    limit: parseInt(req.query.limit) || 5,
    page: parseInt(req.query.page) || 1
  };

  var offset = (options.page - 1) * options.limit + 1;

  Customer.paginate({}, options).then(result => {
    console.log(result);

    res.render('index', {
      customers: result.docs,
      current: result.page,
      pages: result.pages,
      total: result.total
    });
  }).catch(err => {
    console.log(err);
    throw err;
  });

});

router.delete('/:id', function (req, res, next) {
  Customer.findByIdAndDelete({_id: req.params.id}).then(result => {
    console.log(result);

    Customer.paginate({}, {limit: 5, page: 1}).then(result => {
      res.status(200).render('customers', {
        customers: result.docs,
        current: result.page,
        pages: result.pages,
        total: result.total
      });
    });
  }).catch(err => { 
    console.log(err);
    throw err;
  });;

});

module.exports = router;
