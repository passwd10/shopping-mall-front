import express from 'express'

import { productsCategory } from '../stores/productStore';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(productsCategory);
});

export default router;