import { ICreateSquadDTO } from '@modules/squads/dtos/ICreateSquadDTO';
import { Squad } from '../infra/typeorm/entities/Squad';

interface ISquadRepository {
  create({ name, email }: ICreateSquadDTO): Promise<Squad>;
  findByName(name): Promise<Squad>;
  findByEmail(email): Promise<Squad>;
  list(): Promise<Squad[]>;
}

export { ISquadRepository };
