import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { SimpleConsoleLogger } from 'typeorm';

interface IPayload {
  sub: string;
}

export async function ValidateAuth(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing!', 404);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, 'SolidSRE') as IPayload;

    const usersRepository = new UsersRepository();

    const userAuth = usersRepository.findById(user_id);
    if (!userAuth) {
      throw new AppError('User does not exists!', 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    console.log('Invalid Token')
    throw new AppError('Invalid Token!', 401);
  }
}
