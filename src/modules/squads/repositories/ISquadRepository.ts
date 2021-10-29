import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { ICreateSquadDTO } from '@modules/squads/dtos/ICreateSquadDTO';
import { Squad } from '../infra/typeorm/entities/Squad';

interface ISquadRepository {
  create({ name, email }: ICreateSquadDTO): Promise<Squad>;
  attachUser(squad: Squad, user: User): Promise<Squad>;
  findById(id: string): Promise<Squad>;
  findByName(name): Promise<Squad>;
  findByEmail(email): Promise<Squad>;
  list(): Promise<Squad[]>;
}

export { ISquadRepository };
