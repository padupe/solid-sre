import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { ISquadRepository } from '@modules/squads/repositories/ISquadRepository';
import { AppError } from '@shared/errors/AppError';
import Squad from '@shared/infra/typeorm/seeds/Squad';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  squad_id: string;
  users_id: string[];
}

@injectable()
class CreateSquadUsersUseCase {
  constructor(
    @inject('SquadsRepository')
    private squadsRepository: ISquadRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ squad_id, users_id }: IRequest): Promise<Squad> {
    const findSquad = await this.squadsRepository.findById(squad_id);

    if (!findSquad) {
      throw new AppError('Squad does not exists!', 404);
    }

    const newUsers = await this.usersRepository.findByIds(users_id);

    findSquad.users = newUsers;

    await this.squadsRepository.create(findSquad);

    // @ts-ignore
    return findSquad;
  }
}

export { CreateSquadUsersUseCase };
