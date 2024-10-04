import { Router } from 'express';

import { getAllVehiculos, getVehiculosById, createVehiculo, updateVehiculoById, deleteVehiculoById } from './../controllers/vehiculoController.js';

export const vehiculoRouter = Router();

vehiculoRouter.get('/:id', getVehiculosById);
vehiculoRouter.get('/', getAllVehiculos);
vehiculoRouter.post('/', createVehiculo);
vehiculoRouter.put('/:id', updateVehiculoById);
vehiculoRouter.delete('/:id', deleteVehiculoById);