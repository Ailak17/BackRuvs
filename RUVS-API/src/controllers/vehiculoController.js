import { Vehiculos } from './../database/initSequelize.js';

export const getAllVehiculos = async (req, res) => {
    try {
        const vehiculos = await  Vehiculos.findAll();
        res.status(200).json(vehiculos)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const getVehiculosById = async (req, res) => {
    const { id } = req.params;
    try {
        const vehiculo = await Vehiculos.findByPk(id);        
        res.status(200).json(vehiculo);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    };
};

export const createVehiculo = async (req, res) => {    
    const { nro_ruvs_registro_oficial, nro_cargo_policial, marca, modelo, tipo, dominio, nro_chasis_cuadro, 
        nro_motor, nro_causa, dependencia_policial, fecha_hecho, juzgado_interviniente, nro_solicitud, obserbaciones } = req.body;
    if (!nro_ruvs_registro_oficial || !nro_cargo_policial || !marca|| !modelo|| !tipo|| !dominio|| !nro_chasis_cuadro|| !nro_motor|| !dependencia_policial|| !obserbaciones) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    const vehiculoSchema = {
        nro_ruvs_registro_oficial : nro_ruvs_registro_oficial,
        nro_cargo_policial : nro_cargo_policial,
        marca : marca,
        modelo : modelo,
        tipo : tipo,
        dominio : dominio,
        nro_chasis_cuadro : nro_chasis_cuadro,
        nro_motor : nro_motor,
        dependencia_policial : dependencia_policial,
        nro_causa : nro_causa,
        fecha_hecho : fecha_hecho,
        juzgado_interviniente : juzgado_interviniente,
        nro_solicitud : nro_solicitud,
        obserbaciones : obserbaciones
    }
    try {
        const vehiculo = await Vehiculos.create(vehiculoSchema);
        res.status(201).json(vehiculo);        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const updateVehiculoById = async (req, res) => {
    const { id } = req.params;
    const { nro_ruvs_registro_oficial, nro_cargo_policial, marca, modelo, tipo, dominio, chasis_cuadro, motor, dependencia_policial, obserbaciones } = req.body;
    if (!nro_ruvs_registro_oficial || !nro_cargo_policial || !marca|| !modelo|| !tipo|| !dominio|| !chasis_cuadro|| !motor|| !dependencia_policial) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    const updateVehiculo = {
        nro_ruvs_registro_oficial,
        nro_cargo_policial,
        marca,
        modelo,
        tipo,
        dominio,
        chasis_cuadro,
        motor,
        dependencia_policial,
        obserbaciones
    }
    try {
        const vehiculo = await Vehiculos.findByPk(id);
        if (!vehiculo) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            const result = await Vehiculos.update(updateVehiculo);
            res.json({message: 'Vehiculo updated correctly.', result:result})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const deleteVehiculoById = async (req, res) => {
    const { id } = req.params;
    try {
        const vehiculo = await ActaCompactacion.findByPk(id);
        if (!vehiculo) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            await vehiculo.destroy();
            res.status(202).json({ message: 'Vehiculo deleted successfully.' });
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};