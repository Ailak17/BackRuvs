import { ActaVehiculos } from './../database/initSequelize.js';

export const getAllActaVehiculos = async (req, res) => {
    try {
        const actaVehiculos = await  ActaVehiculos.findAll();
        res.status(200).json(actaVehiculos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const getActaVehiculosByActaId = async (req, res) => {
    const { acta_id } = req.params;
    try {
        const actaVehiculos = await ActaVehiculos.findByPk(acta_id);     
        res.status(200).json(actaVehiculos);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    };
};

export const createActaVehiculos = async (req, res) => {    
    const { acta_id, vehiculos_id } = req.body;
    if (!acta_id || !vehiculos_id) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    try {
        const newActaVehiculos = await ActaVehiculos.create({acta_id, vehiculos_id});
        res.status(201).json(newActaVehiculos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const updateActaVehiculosByActaId = async (req, res) => {
    const { acta_id } = req.params;
    const { vehiculo_id } = req.body;
    if (!vehiculo_id) {
        return res.status(404).json({message: 'Missing field.'});
    };
    try {
        const actaVehiculos = await ActaVehiculos.findByPk(acta_id);         
        if (!actaVehiculos) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            const result = await actaVehiculos.update({vehiculo_id});
            res.json({ message: 'Acta Vehiculos updated correctly.', result: result });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const deleteActaVehiculosByActaId = async (req, res) => {
    const { acta_id } = req.params;
    try {
        const actaVehiculos = await ActaVehiculos.findByPk(acta_id);
        if (!actaVehiculos) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            await actaVehiculos.destroy();
            res.status(202).json({ message: 'Acta Vehiculos deleted successfully.' });
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};