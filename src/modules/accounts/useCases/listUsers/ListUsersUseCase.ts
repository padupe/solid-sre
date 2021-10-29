import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import User from '@shared/infra/typeorm/seeds/User';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<User[]> {
    const showUsers = await this.usersRepository.list();
    //@ts-ignore
    return showUsers;
  }
}

export { ListUsersUseCase };
