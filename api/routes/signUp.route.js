import express from 'express';

import { checkDuplicateId } from '../services/checkUserDuplicate';
import { createUserList } from '../services/userService';

const router = express.Router();

router.get('/checkDuplicate', (req, res) => {
  const checkingObj = req.query;
  const isDup = checkDuplicateId(Object.keys(checkingObj) == 'id' && req.query.id)
  res.send(isDup);
})

router.post('/user', (req, res) => {
  const { userInfo } = req.body;
  const signUpUserInfo = createUserList(userInfo);
  res.send(signUpUserInfo);
})

export default router;
