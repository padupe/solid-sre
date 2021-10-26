import { Squad } from '@modules/squads/infra/typeorm/entities/Squad';
import { ISquadRepository } from '@modules/squads/repositories/ISquadRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  name: string;
  email: string;
}

@injectable()
class CreateSquadUseCase {
  constructor(
    @inject('SquadsRepository')
    private squadsRepository: ISquadRepository
  ) {}

  async execute({ name, email }: IRequest): Promise<Squad> {
    const squadAlreadyExistsName = await this.squadsRepository.findByName(name);

    if (squadAlreadyExistsName) {
      throw new Error('Squad aldready exists!');
    }

    const squadAlreadyExistsEmail = await this.squadsRepository.findByEmail(
      email
    );

    if (squadAlreadyExistsEmail) {
      throw new Error('Squad aldready exists!');
    }

    const newSquad = await this.squadsRepository.create({
      name,
      email,
    });

    return newSquad;
  }
}

export { CreateSquadUseCase };
