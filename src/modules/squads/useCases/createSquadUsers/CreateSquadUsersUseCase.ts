import Squad from '@shared/infra/typeorm/seeds/Squad';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { ISquadRepository } from '@modules/squads/repositories/ISquadRepository';
import { AppError } from '@shared/errors/AppError';
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
    console.log('1', findSquad)

    if (!findSquad) {
      throw new AppError('Squad does not exists!', 404);
    }

    const newUsers = await this.usersRepository.findByIds(users_id);
    console.log('2', newUsers)

    findSquad.users = newUsers;
    console.log('3', findSquad.users)

    await this.squadsRepository.create(findSquad);

    console.log('4', findSquad)
    // @ts-ignore
    return findSquad;
  }
}

export { CreateSquadUsersUseCase };
