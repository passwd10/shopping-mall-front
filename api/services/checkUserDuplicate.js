import UserRepository from '../repositories/user.repository';

const userRepo = new UserRepository();

const checkDuplicateId = async (userId) => {
  const user = await userRepo.findById(userId)
  return user.length;
}

export { checkDuplicateId };
