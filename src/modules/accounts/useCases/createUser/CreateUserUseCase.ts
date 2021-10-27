import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';
import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { v4 as uuidv4 } from 'uuid';

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

    // if (!verifyUserAlreadyExists.id && (verifyUserAlreadyExists.id == undefined || verifyUserAlreadyExists.id == null)) {
    //   verifyUserAlreadyExists.id = uuidv4()
    // }

    const passHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      password: passHash,
      email,
    });
  }
}

export { CreateUserUseCase };
