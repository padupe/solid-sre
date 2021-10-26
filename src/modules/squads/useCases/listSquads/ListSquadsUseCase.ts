import { Squad } from '@modules/squads/infra/typeorm/entities/Squad';
import { ISquadRepository } from '@modules/squads/repositories/ISquadRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListSquadsUseCase {
  constructor(
    @inject('SquadsRepository')
    private squadsRepository: ISquadRepository
  ) {}

  async execute(): Promise<Squad[]> {
    const showSquads = await this.squadsRepository.list();
    return showSquads;
  }
}

export { ListSquadsUseCase };
