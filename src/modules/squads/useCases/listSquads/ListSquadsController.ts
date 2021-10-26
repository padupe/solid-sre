import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListSquadsUseCase } from './ListSquadsUseCase';

class ListSquadsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSquadsUseCase = container.resolve(ListSquadsUseCase);

    const showAllSquads = await listSquadsUseCase.execute();

    return response.status(200).json(showAllSquads);
  }
}

export { ListSquadsController };
