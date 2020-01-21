import express from 'express';

import { addItem, getItem, getItems } from '../services/itemService';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await getItems();
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const product = await getItem(req.params.id);
  res.send(product);
})

router.post('/', (req, res) => {
  const item = addItem(req.body);
  res.send({ item });
})

export default router;
