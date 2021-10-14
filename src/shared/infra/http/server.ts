import 'reflect-metadata'
import express from 'express';
import { router } from './routes';
import '../typeorm';
import '../../container'

const app = express();

app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () =>
  console.log(`Server is running in port ${process.env.PORT}! 🚀`)
);
// app.listen(7777, () => console.log(`Server is running! 🚀`));