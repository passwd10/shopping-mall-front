import express from 'express';

import { setUserStore } from '../services/userService';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(req.session.userInfo)
});

router.patch('/', async (req, res) => {
  const { updateInfo } = req.body;

  const userId = req.session.userInfo[0].userId;

  req.session.userInfo = await setUserStore(userId, updateInfo);

  res.send(req.session.userInfo);
});

export default router;