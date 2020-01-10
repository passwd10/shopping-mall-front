import express from 'express';

import { addItem } from '../services/itemService';
import { productStore } from '../stores/productStore';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(productStore._product);
});

router.get('/:id', (req, res) => {
  res.send(productStore.getProduct(req.params.id));
})

router.post('/', (req, res) => {
  const { title, categoryId, categoryName, detail, img, price } = req.body;
  const item = addItem(title, categoryId, categoryName, detail, img, price);
  res.send({ item });
})

export default router;
