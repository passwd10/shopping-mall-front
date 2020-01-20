import express from 'express';

import { searchItems } from '../services/itemService'

const router = express.Router();

router.get('/search', async (req, res) => {
  const searchKeyword = req.query.q;
  res.send(await searchItems(searchKeyword));
})

export default router;
