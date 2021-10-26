import { Router } from 'express';
import { authRoutes } from './auth.routes';
import { squadsRoutes } from './squad.routes';
import { usersRoutes } from './user.routes';

const router = Router();

router.use(authRoutes);
router.use('/users', usersRoutes);
router.use('/squads', squadsRoutes);

export { router };
