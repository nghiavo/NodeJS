var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var customers = [
    { id: '1', name: 'Thomas Hardy', address: 	'89 Chiaroscuro Rd.', city: 'Portland', pinCode: '97219', country: 'USA' },
    { id: '2', name: 'Maria Anders', address: 	'Obere Str. 57', city: 'Berlin', pinCode: '12209', country: 'Germany' },
    { id: '3', name: 'Fran Wilson', address: 	'C/ Araquil, 67', city: 'Madrid', pinCode: '28023', country: 'Spain' },
    { id: '4', name: 'Dominique Perrier', address: 	'25, rue Lauriston', city: 'Paris', pinCode: '75016', country: 'France' },
    { id: '5', name: 'Martin Blank', address: 	'Via Monte Bianco 34', city: 'Turin', pinCode: '10100', country: 'Italy' }
  ];

  var page = {
    dispNum: 5,
    totalNum: 25,
    link: {next: '', prev: ''}
  }

  res.render('index', {
    customers: customers,
    title: 'Express'
  });
});

module.exports = router;
