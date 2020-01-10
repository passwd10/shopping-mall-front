import express from 'express';

import { addItem } from '../services/itemService';
import { productStore } from '../stores/productStore';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(productStore.products);
});

router.get('/:id', (req, res) => {
  res.send(productStore.getProduct(req.params.id));
})

router.post('/', (req, res) => {
  const item = addItem(req.body);
  res.send({ item });
})

export default router;
