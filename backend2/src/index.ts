import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application, Request, Response, NextFunction } from 'express';

import appRouter from './routes';
import { notFound } from './middlewares/notFound';
import { errorHandler } from './middlewares/errorHandler';
import logger from './utils/logger'; 

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cors());


app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
});

app.use(appRouter);


app.use(notFound);


app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
