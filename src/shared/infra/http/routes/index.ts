import { Router } from 'express';
import { authRoutes } from './auth.routes';
import { usersRoutes } from './user.routes';

const router = Router();

router.use(authRoutes);
router.use('/users', usersRoutes);

export { router };
