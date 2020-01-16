import express from 'express';

import { isUserInUserStore } from '../services/userService';

const router = express.Router();

router.post('/', (req, res) => {
  const { userId, userPasswd } = req.body;
  const userInfo = isUserInUserStore(userId, userPasswd);
  console.log('잘 오냐', userInfo);
  const session = req.session;

  session.userInfo = userInfo;

  res.send(session.userInfo);
});

router.delete('/', (req, res) => {
  req.session.destroy();
  res.clearCookie('connect.sid');
  res.send('Session Destroyed');
});

export default router;
