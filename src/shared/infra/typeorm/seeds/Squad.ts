// c639619f-81f9-4b9c-ba8d-ea4161460ddb
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Squad } from '../../../../modules/squads/infra/typeorm/entities/Squad';

export default class CreateSquads implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Squad)
      .values([
        {
          id: 'c639619f-81f9-4b9c-ba8d-ea4161460ddb',
          name: 'Squad A',
          email: 'squad_a@email.com',
          created_at: '10-27-2021',
          updated_at: '10-27-2021 14:05:00.548574',
        },
        {
          id: 'b35cc893-98b2-4b13-a888-f4c1c2e36b24',
          name: 'Squad B',
          email: 'squad_b@email.com',
          created_at: '10-27-2021',
          updated_at: '10-27-2021 14:10:00.548574',
        },
      ])
      .execute();
  }
}
