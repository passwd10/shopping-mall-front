import express from 'express';
import { addCartList, deleteCartList } from '../services/cartService';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(req.session.userInfo[0].cartList);
});

router.post('/', async (req, res) => {
  const { productId } = req.body;
  req.session.userInfo = await addCartList(req.session.userInfo[0].userId, productId);
  res.send(req.session.userInfo[0].cartList);
});

router.delete('/', async (req, res) => {
  const { productId } = req.body;
  req.session.userInfo = await deleteCartList(req.session.userInfo[0].userId, productId);
  res.send(req.session.userInfo[0].cartList);
})

export default router;
