

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 3000;
const models = require('./models');

const validationMiddleware = require('./middleware');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const Product = models.Product;
const Attribute = models.Attribute;

app.get('/products', (req, res, next) => {
  Product.findAll({
    include: [{
      model: Attribute, 
      as: 'attributes',
      attributes: ['type', 'value'],
      through: { 
        attributes: []
      }
    }]
  })
  .then(products => {
      res.status(200).send(products);
  })
  .catch(err => console.log(err))
});

app.post('/products', validationMiddleware.validateProductName, validationMiddleware.validateAttrTypes, (req, res, next) => {
  const body = req.body;

  Product.create({
    name: body.productName,
    attributes: [...body.attributes],
  },
  {
    include: [{model: Attribute, as: 'attributes'}]
  })
  .then(product => {
    res.status(200).send(product)
  })
  .catch(err => console.log(err))

});

server.listen(port, () => {
 console.log(`Server running at port ${port}`);
})
