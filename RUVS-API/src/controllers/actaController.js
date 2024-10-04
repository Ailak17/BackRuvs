import { Acta, Vehiculos } from './../database/initSequelize.js';

export const getAllActas = async (req, res) => {
    try {
        const actas = await  Acta.findAll({
            include: [
                Vehiculos
            ]
        });
        res.status(200).json(actas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const getActaById = async (req, res) => {
    const { id } = req.params;
    try {
        const acta = await Acta.findByPk(id, {
            include: [
                Vehiculos
            ]
        });     
        res.status(200).json(acta);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    };
};

export const createActa = async (req, res) => {    
    const { acta_url } = req.body;
    if (!acta_url) {
        return res.status(404).json({message: 'Missing field.'});
    };
    try {
        const newActa = await Acta.create({acta_url});
        res.status(201).json(newActa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const updateActaById = async (req, res) => {
    const { id } = req.params;
    const { acta_url } = req.body;
    if (!acta_url) {
        return res.status(404).json({message: 'Missing field.'});
    };
    try {
        const acta = await Acta.findByPk(id);         
        if (!acta) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            const result = await Acta.update({acta_url});
            res.json({ message: 'Acta updated correctly.', result: result });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const deleteActaById = async (req, res) => {
    const { id } = req.params;
    try {
        const acta = await Acta.findByPk(id);
        if (!acta) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            await acta.destroy();
            res.status(202).json({ message: 'Acta deleted successfully.' });
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};