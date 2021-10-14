import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { Request, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export async function ValidateAuth(request: Request, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token missing!');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, 'SolidSRE') as IPayload;

    const usersRepository = new UsersRepository();

    const userAuth = usersRepository.findById(user_id);
    if (!userAuth) {
      throw new Error('User does not exists!');
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new Error('Invalid Token!');
  }
}
