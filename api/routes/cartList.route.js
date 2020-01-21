import express from 'express';
import { addCartList, deleteCartList } from '../services/cartService';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(req.session.userInfo[0].cartList);
});

router.post('/', (req, res) => {
  const { productId } = req.body;
  req.session.userInfo = addCartList(req.session.userInfo[0].userId, productId);
  res.send();
});

router.delete('/', (req, res) => {
  const { productId } = req.body;
  req.session.userInfo = [deleteCartList(req.session.userInfo[0].userId, productId)];
  res.send(req.session.userInfo[0].cartList);
})

export default router;
