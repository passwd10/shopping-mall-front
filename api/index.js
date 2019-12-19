const express = require('express');
const cors = require('cors');
const app = express();

const {
    productsCategory,
    productStore,
    cartList,
} = require('./stores/productStore');

const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/static', express.static('public'));

app.get('/productStore', (req, res) => {
    res.send(productStore._product);
});

app.get('/productsCategory', (req, res) => {
    res.send(productsCategory);
});

app.get('/cartList', (req, res) => {
    res.send(cartList._cartList);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});