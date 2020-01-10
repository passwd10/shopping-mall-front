import express from 'express';

import { searchItems } from '../services/itemService'

const router = express.Router();

router.get('/search', (req, res) => {
  const searchKeyword = req.query.q;
  res.send(searchItems(searchKeyword));
})

export default router;
