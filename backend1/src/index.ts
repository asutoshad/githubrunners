import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';

import appRouter from './routes';
import { notFound } from './middlewares/notFound';
import { errorHandler } from './middlewares/errorHandler';

// Clerk imports
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';




dotenv.config();

const app: Application = express();

// app.use(express.json());
// app.use(cors());


// app.use(cors({
//   origin: 'http://localhost',
//   credentials: true
// }));


app.use(cors({
  origin: ['http://localhost', 'http://localhost:80', 'http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));





app.use(ClerkExpressWithAuth());

app.use(appRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;



app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
