import { ICreateSquadDTO } from "@modules/squads/dtos/ICreateSquadDTO";
import { ISquadRepository } from "@modules/squads/repositories/ISquadRepository";
import { getRepository, Repository } from "typeorm";
import { Squad } from "../entities/Squad";


class SquadsRepository implements ISquadRepository {
    private repository: Repository<Squad>;

    constructor(){
        this.repository = getRepository(Squad);
    };

    async create({ name, email }: ICreateSquadDTO): Promise<Squad> {
        const newSquad = await this.repository.create({
            name,
            email,
        })

        await this.repository.save(newSquad);

        return newSquad;
    };

    async findByName(name: any): Promise<Squad> {
        const findSquadByName = await this.repository.findOne({
            name
        });

        return findSquadByName;
    };

    async findByEmail(email: any): Promise<Squad> {
        const findSquadByEmail = await this.repository.findOne({
            email
        });

        return findSquadByEmail;
    };
};

export { SquadsRepository };