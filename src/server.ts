import dotenv from 'dotenv';
import express from 'express';

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => console.log(`Server is running in ${process.env.PORT}! 🚀`));
