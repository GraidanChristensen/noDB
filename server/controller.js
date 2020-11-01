const products = require('./products.json');
let cart = [];

module.exports = {
    getProducts: (req, res) => {
        //return all products
        return res.status(200).send(products);
    },
    getProduct: (req, res) => {
        // return product based on id. if not found return 400
        const {id} = req.params;
        const product = products.find((element) => element.id === +id);

        if(!product){
            res.status(400).send("Product not found");
        }

        return res.status(200).send(product);
    },
    
    getCart: (req, res) => {
        return res.status(200).send(cart);
    },

    addToCart: (req, res) => {
        const {id} = req.params; //destructure
        const product = products.find(element => element.id === +id); //find correct product

        product.quantity = 1;
        product.size = "none";

        cart.push(product);  //add product to cart

        return res.status(200).send(cart);  //return cart
    },
    
    editQuantity: (req, res) => {
        const {index} = req.params; //destructure params
        const {quantity} = req.body;

        cart[index].quantity = quantity;

        res.status(200).send(cart);

    },

    editSize: (req, res) => {
        const {index} = req.params;
        const {size} = req.body;

        cart[index].size = size;

        res.status(200).send(cart)
    },

    removeFromCart: (req, res) => {
        const {index} = req.params;

        cart.splice(index, 1);

        res.status(200).send(cart);
    }
}