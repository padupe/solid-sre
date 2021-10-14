import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { Request, NextFunction } from 'express';

export async function ValidadeAdmin(request: Request, next: NextFunction) {
  const { id } = request.user;

  const usersRepository = new UsersRepository();
  const validadeUser = await usersRepository.findById(id);

  if (!validadeUser.isAdmin) {
    throw new Error('User is not Admin!');
  }

  return next();
}
