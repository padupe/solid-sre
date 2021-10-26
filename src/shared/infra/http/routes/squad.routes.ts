import { CreateSquadController } from '@modules/squads/useCases/createSquad/CreateSquadController';
import { Router } from 'express';

const squadsRoutes = Router();
const createSquadController = new CreateSquadController();

squadsRoutes.post('/', createSquadController.handle);

export { squadsRoutes };