import { DataTypes } from 'sequelize';

export default (sequelize) => {    
    const actaVehiculosModel = sequelize.define('acta_vehiculos', {
        vehiculo_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'vehiculos',
                key: 'id'
            }
        },
        acta_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'actas',
                key: 'id'
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
    return actaVehiculosModel;
}