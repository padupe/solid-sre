import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../../../../modules/accounts/infra/typeorm/entities/User';

export default class CreateAdminUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          id: '04cd0b72-3cba-46f8-87af-ea5093fb3d85',
          name: 'Admin',
          password: '$2b$08$uPikLt/16B/vvAR.0I/hn.GTztGnIvM2sbTdn4zqAylKfjxC8bVdu',
          email: 'admin@email.com',
          isAdmin: true,
          created_at: '10-27-2021 14:00:00.548574',
        },
      ])
      .execute();
  }
}
