import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { PORT } from './config.js';

import { userRouter } from './src/routes/userRoutes.js';
import { roleRouter } from './src/routes/roleRoutes.js';
import { actaRouter } from './src/routes/actaRoutes.js';
import { vehiculoRouter } from './src/routes/vehiculosRoutes.js';

const app = express();

//Settings
app.set('port', PORT);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/users', userRouter);
app.use('/api/roles', roleRouter);
app.use('/api/actas', actaRouter);
app.use('/api/vehiculos', vehiculoRouter);

export default app;