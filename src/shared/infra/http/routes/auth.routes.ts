import { AuthUserController } from '@modules/accounts/useCases/auth/AuthUserController';
import { Router } from 'express';

const authRoutes = Router();
const authUserController = new AuthUserController();

authRoutes.post('/sessions', authUserController.handle);

export { authRoutes };
