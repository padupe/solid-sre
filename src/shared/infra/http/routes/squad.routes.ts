import { CreateSquadController } from '@modules/squads/useCases/createSquad/CreateSquadController';
import { Router } from 'express';
import { ValidateAuth } from '../middlewares/ValidateAuth';
import { ValidateAdmin } from '../middlewares/ValidateAdmin';
import { ListSquadsController } from '@modules/squads/useCases/listSquads/ListSquadsController';
import { CreateSquadUsersController } from '@modules/squads/useCases/createSquadUsers/CreateSquadUsersController';

const squadsRoutes = Router();
const createSquadController = new CreateSquadController();
const listSquadsController = new ListSquadsController();
const createSquadUsersController = new CreateSquadUsersController();

squadsRoutes.post(
  '/',
  ValidateAuth,
  ValidateAdmin,
  createSquadController.handle
);

squadsRoutes.get('/', ValidateAuth, listSquadsController.handle);
squadsRoutes.post('/users/:id', ValidateAuth, ValidateAdmin, createSquadController.handle)

export { squadsRoutes };
