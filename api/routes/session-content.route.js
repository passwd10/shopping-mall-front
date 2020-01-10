import express from 'express';

import setUserStore from '../services/userService';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(req.session.userInfo)
});

router.patch('/', (req, res) => {
  const { userAttribute, infoToChange } = req.body;
  const firstUserId = req.session.userInfo[0].userId;

  req.session.userInfo[0][userAttribute] = infoToChange;

  setUserStore(firstUserId, userAttribute, infoToChange);

  res.send(req.session.userInfo);
});

export default router;