const express = require('express');
const cors = require('cors');
const app = express();

const {
    productsCategory,
    productStore,
    cartList,
} = require('./stores/productStore');

const {
    userList
} = require('./stores/userStore');

const {
    addItem,
} = require('./service/itemService');

const {
    isUserInUserStore,
} = require('./service/loginService');

const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/static', express.static('public'));

app.get('/productStore', (req, res) => {
    res.send(productStore._product);
});

app.post('/productStore', (req, res) => {
    const { title, categoryId, categoryName, detail, img, price } = req.body;
    const item = addItem(title, categoryId, categoryName, detail, img, price);
    res.send({ item });
})

// app.get('/userStore', (req, res) => {
//     const { userId, userPasswd } = req.body;
//     const result = isUserInUserStore(userId, userPasswd);
//     res.send({ result });
// })

app.post('/login', (req, res) => {
    const { userId, userPasswd } = req.body;
    const userInfo = isUserInUserStore(userId, userPasswd);
    res.send({ userInfo });
})

app.get('/productsCategory', (req, res) => {
    res.send(productsCategory);
});

app.get('/cartList', (req, res) => {
    res.send(cartList._cartList);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});