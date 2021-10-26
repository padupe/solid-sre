import { CreateSquadController } from '@modules/squads/useCases/createSquad/CreateSquadController';
import { Router } from 'express';
import { ValidateAuth } from '../middlewares/ValidateAuth';
import { ValidateAdmin  } from '../middlewares/ValidateAdmin';

const squadsRoutes = Router();
const createSquadController = new CreateSquadController();

squadsRoutes.post('/', ValidateAuth, ValidateAdmin, createSquadController.handle);

export { squadsRoutes };