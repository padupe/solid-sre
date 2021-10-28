import { User } from "@modules/accounts/infra/typeorm/entities/User";

interface ICreateSquadDTO {
  name: string;
  email: string;
  users?: User[];
  id?: string;
}

export { ICreateSquadDTO };
