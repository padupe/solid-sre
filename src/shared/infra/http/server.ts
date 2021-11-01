import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import swagger from 'swagger-ui-express';
import { router } from './routes';
import '../typeorm';
import '../../container';
import { AppError } from '@shared/errors/AppError';
import swaggerInfo from '../../../swagger.json';

const app = express();

app.use(express.json());

app.use('/docs', swagger.serve, swagger.setup(swaggerInfo));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    console.log(err);
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(process.env.PORT, () =>
  console.log(`Server is running in port ${process.env.PORT}! 🚀`)
);
