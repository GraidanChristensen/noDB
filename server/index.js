const express = require('express');
const app = express();
const controller = require('./controller.js');
const port = 4040;

app.use(express.json());

app.get('/api/products', controller.getProducts);  //get all of products
app.get('/api/products/:id', controller.getProduct); //get single product
app.get('/api/cart', controller.getCart); // get cart 
app.post('/api/cart/:id', controller.addToCart);  // add to cart
app.put('/api/cart/:index', controller.editQuantity); //edit quantity
app.put('/api/cart/size/:index', controller.editSize); //edit size of product
app.delete('/api/cart/:index', controller.removeFromCart); // delete from cart



app.listen(port, ()=> console.log(`server listening on: ${port}`));


