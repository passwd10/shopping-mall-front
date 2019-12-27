const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

const {
    productsCategory,
    productStore,
} = require('./stores/productStore');

const { userList } = require('./stores/userStore');
const { addItem } = require('./service/itemService');
const { isUserInUserStore } = require('./service/userService');
const { cartStore } = require('./stores/cartStore');
const { createCartList, addCartList } = require('./service/cartService');

const port = 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
}));

app.use(session({
    secret: 'hello',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        name: 'userInfoCookie',
        httpOnly: true,
        secure: false,
        maxAge: 3600000,
        expires: new Date(Date.now() + 3600000)
    }
}));

app.use('/static', express.static('public'));

app.post('/login', (req, res) => {
    const { userId, userPasswd } = req.body;
    const userInfo = isUserInUserStore(userId, userPasswd);
    const session = req.session;

    session.userInfo = userInfo;

    res.send(session.userInfo);   
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('Session Destroyed');
});

app.get('/productStore', (req, res) => {
    res.send(productStore._product);
});

app.post('/productStore', (req, res) => {
    const { title, categoryId, categoryName, detail, img, price } = req.body;
    const item = addItem(title, categoryId, categoryName, detail, img, price);
    res.send({ item });
})

app.get('/productsCategory', (req, res) => {
    res.send(productsCategory);
});

app.get('/cartList', (req, res) => {
    res.send(cartStore._cartList);
});

app.post('/cartList', (req, res) => {
    const { userId, cartListId, productId } = req.body;
    console.log('장바구니 클릭시 유저아이디', userId);
    console.log('장바구니 클릭시 유저카트아이디', cartListId);
    console.log('장바구니 클릭시 상품아이디', productId);
    const { id, productIdList } = cartListId == 0 ? createCartList(userId, cartListId, productId) : addCartList(cartListId, productId);
    res.send({ id, productIdList });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});