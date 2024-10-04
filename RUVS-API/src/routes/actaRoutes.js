import { Router } from 'express';

import { getAllActas, getActaById, createActa, updateActaById, deleteActaById } from './../controllers/actaController.js';

export const actaRouter = Router();

actaRouter.get('/:id', getActaById);
actaRouter.get('/', getAllActas);
actaRouter.post('/', createActa);
actaRouter.put('/:id', updateActaById);
actaRouter.delete('/:id', deleteActaById);