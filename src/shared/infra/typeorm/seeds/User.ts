import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../../../../modules/accounts/infra/typeorm/entities/User';

// User One -> password: passworduser1
// User Two -> password: passworduser2

export default class CreateAdminUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          id: 'c639619f-81f9-4b9c-ba8d-ea4161460ddb',
          name: 'User One',
          password: '$2b$08$F2IXXrbe0gESweXucTUlNeZntHb7uOuczm6qAsGn3zMaXJVwDyIcO',
          email: 'user_one@email.com',
          isAdmin: false,
          created_at: '10-27-2021 14:15:00.548574',
        },
        {
          id: '65d5942f-b582-4f16-a851-6d34738874b1',
          name: 'User Two',
          password: '$2b$08$ps7y4oIC0TBLOJdDyf/wQORz9OMZFqFuwCsVy.QFKU20Dus5Hza5u',
          email: 'user_two@email.com',
          isAdmin: false,
          created_at: '10-27-2021 14:20:00.548574',
        },
      ])
      .execute();
  }
}
