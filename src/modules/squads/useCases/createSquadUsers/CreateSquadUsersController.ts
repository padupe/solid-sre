import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSquadUsersUseCase } from './CreateSquadUsersUseCase';

class CreateSquadUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { squad_id, users_id } = request.body;

    const createSquadUsersUsecase = container.resolve(CreateSquadUsersUseCase);

    const squadUsers = await createSquadUsersUsecase.execute({
      squad_id,
      users_id,
    });

    return response.status(201).json(squadUsers);
  }
}

export { CreateSquadUsersController };
