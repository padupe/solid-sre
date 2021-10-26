import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSquadUseCase } from './CreateSquadUseCase';

class CreateSquadController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const createSquadUseCase = container.resolve(CreateSquadUseCase);

    const newSquad = await createSquadUseCase.execute({
      name,
      email,
    });

    return response.status(201).json(newSquad);
  }
}

export { CreateSquadController };
