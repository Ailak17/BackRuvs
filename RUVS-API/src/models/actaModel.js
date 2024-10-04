import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const actaModel = sequelize.define('actas', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        acta_url: {
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
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
    return actaModel;
}