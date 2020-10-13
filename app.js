const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 3000;
const productRoutes = require('./server/routes.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productRoutes)

server.listen(port, () => {
 console.log(`Server running at port ${port}`);
})
