import { CreateSquadController } from '@modules/squads/useCases/createSquad/CreateSquadController';
import { Router } from 'express';
import { ValidateAuth } from '../middlewares/ValidateAuth';
import { ValidateAdmin } from '../middlewares/ValidateAdmin';
import { ListSquadsController } from '@modules/squads/useCases/listSquads/ListSquadsController';

const squadsRoutes = Router();
const createSquadController = new CreateSquadController();
const listSquadsController = new ListSquadsController();

squadsRoutes.post(
  '/',
  ValidateAuth,
  ValidateAdmin,
  createSquadController.handle
);

squadsRoutes.get('/', ValidateAuth, listSquadsController.handle);

export { squadsRoutes };
