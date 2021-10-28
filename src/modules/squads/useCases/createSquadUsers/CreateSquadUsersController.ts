import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSquadUsersUseCase } from './CreateSquadUsersUseCase';

class CreateSquadUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { users_id } = request.body;

    const createSquadUsersUsecase = container.resolve(CreateSquadUsersUseCase);

    const squadUsers = await createSquadUsersUsecase.execute({
      squad_id: id,
      users_id,
    });

    return response.status(201).json(squadUsers);
  }
}

export { CreateSquadUsersController };
