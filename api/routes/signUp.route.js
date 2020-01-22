import express from 'express';

import { checkDuplicateId } from '../services/checkUserDuplicate';
import UserRepository from '../repositories/user.repository'

const router = express.Router();

router.get('/checkDuplicate', async (req, res) => {
  const checkingObj = req.query;
  const isDup = await checkDuplicateId(Object.keys(checkingObj) == 'id' && req.query.id);
  res.send(isDup + '');
})

router.post('/user', async (req, res) => {
  const { userInfo } = req.body;
  const userRepo = new UserRepository();

  const signUpUserInfo = await userRepo.store(userInfo);

  res.send(signUpUserInfo);
})

export default router;
