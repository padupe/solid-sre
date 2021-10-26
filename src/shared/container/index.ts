import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { SquadsRepository } from '@modules/squads/infra/typeorm/repositories/SquadsRepository';
import { ISquadRepository } from '@modules/squads/repositories/ISquadRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<ISquadRepository>(
  'SquadsRepository',
  SquadsRepository
);
