import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const verifyEmailUser = await this.usersRepository.findByEmail(email);
    if (!verifyEmailUser) {
      throw new Error('User or Password Incorrect!');
    }

    const verifyPassUser = await compare(password, verifyEmailUser.password);
    if (!verifyPassUser) {
      throw new Error('User or Password Incorrect!');
    }

    const generateTokenJWT = sign({}, 'SolidSRE', {
      subject: verifyEmailUser.id,
      expiresIn: '1h',
    });

    const tokenJWT: IResponse = {
      user: {
        name: verifyEmailUser.name,
        email: verifyEmailUser.email,
      },
      token: generateTokenJWT,
    };

    return tokenJWT;
  }
}

export { AuthUserUseCase };
