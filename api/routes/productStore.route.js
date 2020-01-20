import express from 'express';

import { addItem } from '../services/itemService';
import ProductStoreRepository from '../repositories/productStore.repository'

const router = express.Router();

const productStore = new ProductStoreRepository();

router.get('/', async (req, res, next) => {
  const products = await productStore.findAll();
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const product = await productStore.findById(req.params.id);
  res.send(product);
})

router.post('/', (req, res) => {
  const item = addItem(req.body);
  res.send({ item });
})

export default router;
