import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';

export async function ValidateAdmin(request: Request, response: Response, next: NextFunction) {
  const { id } = request.user;

  const usersRepository = new UsersRepository();
  const validadeUser = await usersRepository.findById(id);

  if (!validadeUser.isAdmin) {
    throw new AppError('User is not Admin!', 401);
  }

  return next();
}
