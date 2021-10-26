import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';
import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, password, email }: ICreateUserDTO): Promise<void> {
    const verifyUserAlreadyExists = await this.usersRepository.findByEmail(
      email
    );
    if (verifyUserAlreadyExists) {
      throw new AppError('User Already Exists!', 404);
    }

    const passHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      password: passHash,
      email,
    });
  }
}

export { CreateUserUseCase };
