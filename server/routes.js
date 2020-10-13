const express = require('express');
const router = express.Router();

const models = require('./models');

const validationMiddleware = require('./middleware');

const Product = models.Product;
const Attribute = models.Attribute;

router.get('/', (req, res, next) => {
  Product.findAll({
    include: [{
      model: Attribute, 
      as: 'attributes', // lowercase alias
      attributes: ['type', 'value'],
      through: { 
        attributes: [] //rename key from Product_Attributes
      }
    }]
  })
  .then(products => {
      res.status(200).send(products);
  })
  .catch(err => {
    console.log(err)
    const error = err || 'An Error Occured';
    return next(error)
  })
});

router.get('', (req, res, next) => {
    Product.findAll({
      include: [{
        model: Attribute, 
        as: 'attributes', // lowercase alias
        attributes: ['type', 'value'],
        through: { 
          attributes: [] //rename key from Product_Attributes
        }
      }]
    })
    .then(products => {
        res.status(200).send(products);
    })
    .catch(err => {
      console.log(err)
      const error = err || 'An Error Occured';
      return next(error)
    })
  });

router.post('/', validationMiddleware.validateProductName, validationMiddleware.validateAttrTypes, (req, res, next) => {
  const body = req.body;

  Product.create({
    name: body.productName,
    attributes: body.attributes,
  },
  {
    include: [{model: Attribute, as: 'attributes'}]
  })
  .then(product => {
    res.status(200).send(product)
  })
  .catch(err => {
    console.log(err)
    const error = err || 'An Error Occured';
    return next(error)
  })
});


module.exports = router;