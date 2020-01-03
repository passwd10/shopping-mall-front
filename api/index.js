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
const { isUserInUserStore, setUserStore, getCartId } = require('./service/userService');
const { addCartList, deleteCartList } = require('./service/cartService');

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
        httpOnly: false,
        secure: false,
        maxAge: 3600000,
        expires: new Date(Date.now() + 3600000),
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

app.delete('/login', (req, res) => {
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.send('Session Destroyed');
});

app.get('/session-content', (req, res) => {
    res.send(req.session.userInfo)
});

app.patch('/session-content', (req, res) => {
    const { userAttribute, infoToChange } = req.body;
    const firstUserId = req.session.userInfo[0].userId;

    req.session.userInfo[0][userAttribute] = infoToChange;

    setUserStore(firstUserId, userAttribute, infoToChange);

    res.send(req.session.userInfo);
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
    res.send(req.session.userInfo[0].cartList);
});

app.post('/cartList', (req, res) => {
    const { productId } = req.body;
    req.session.userInfo = addCartList(req.session.userInfo[0].userId, productId);
    res.send();
});

app.delete('/cartList', (req, res) => {
    const { productId } = req.body;
    req.session.userInfo = [deleteCartList(req.session.userInfo[0].userId, productId)];
    res.send(req.session.userInfo[0].cartList);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});