var express = require('express');
var router = express.Router();
var models = require('../db/models/index');

/* item page route. Will show individual item details */
router.get('/test', function(req, res, next) {
  console.log('I hear you');
  // id should be req.params.id to allow for dynamic content. Am using 1 for testing
  models.Product.findById(7).then(function(product) {
    res.render('products/item',
    { productDetails: product,
      title: `Joe's Cocktail Confections - ${product.productName}`
    });
  });
});

/* GET products listing. */
router.get('/cupcakes', function(req, res, next) {
  res.render('products/cupcakes', {
    title: "Joe's Cocktail Confections - Cupcake Index"
  });
});

/*router.get('/', function(req, res, next) {  // main route
  models.Products.findAll({}).then(function(products){
    res.render('products/cupcakes', {
      title: "Joe's Cocktail Confections - Cupcake Index",
      products: products
    });
  });
});*/

router.get('/cakes', function(req, res, next) {
  res.render('products/cakes', {
    title: "Joe's Cocktail Confections - Cake Index"
  });
});

router.get('/strawberries', function(req, res, next) {
  res.render('products/strawberries', {
    title: "Joe's Cocktail Confections - Strawberries Index"
  });
});

/*
router.get('/item', function(req, res, next) {
  res.render('products/item', {
    title: "Joe's Cocktail Confections - Item Detail"
  });
});

*/


module.exports = router;
