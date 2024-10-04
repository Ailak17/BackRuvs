import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const actaCompactacionModel = sequelize.define('vehiculos', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        nro_ruvs_registro_oficial: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        nro_cargo_policial: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            unique: true
        },
        marca: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        modelo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        dominio: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        nro_chasis_cuadro: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        nro_motor: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        dependencia_policial: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        nro_causa: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        fecha_hecho: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        juzgado_interviniente: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        nro_solicitud: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        observaciones: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    })
    return actaCompactacionModel;
};