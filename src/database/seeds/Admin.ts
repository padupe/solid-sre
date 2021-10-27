import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcrypt'
import { User } from '../../modules/accounts/infra/typeorm/entities/User';

export default class CreateAdminUser implements Seeder{
    public async run(factory: Factory, connection: Connection): Promise<void> {
        const idAdmin = uuidv4();
        const passAdmin = await hash('senha123', 8)


        await connection.createQueryBuilder().insert().into(User).values([
            { id: 'asd12345', name: 'Admin', password: 'senha1234', email: 'admin@email.com', isAdmin: true, created_at: 'now()' }
        ]).execute()
    }
    
}