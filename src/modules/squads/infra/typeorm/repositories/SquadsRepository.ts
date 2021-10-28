import { ICreateSquadDTO } from '@modules/squads/dtos/ICreateSquadDTO';
import { ISquadRepository } from '@modules/squads/repositories/ISquadRepository';
import { getRepository, Repository } from 'typeorm';
import { Squad } from '../entities/Squad';

class SquadsRepository implements ISquadRepository {
  private repository: Repository<Squad>;

  constructor() {
    this.repository = getRepository(Squad);
  }

  async create({ name, email }: ICreateSquadDTO): Promise<Squad> {
    const newSquad = await this.repository.create({
      name,
      email,
    });

    await this.repository.save(newSquad);

    return newSquad;
  }

  async findById(id: string): Promise<Squad> {
    const findSquadById = await this.repository.findOne(id);
    return findSquadById;
  }

  async findByName(name: any): Promise<Squad> {
    const findSquadByName = await this.repository.findOne({
      name,
    });

    return findSquadByName;
  }

  async findByEmail(email: any): Promise<Squad> {
    const findSquadByEmail = await this.repository.findOne({
      email,
    });

    return findSquadByEmail;
  }

  async list(): Promise<Squad[]> {
    const showSquads = await this.repository.find();
    return showSquads;
  }
}

export { SquadsRepository };
