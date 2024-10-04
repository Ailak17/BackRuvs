import { Sequelize } from 'sequelize';

import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } from './../../config.js';

import userModel from './../models/userModel.js';
import roleModel from './../models/roleModel.js';
import userRolesModel from './../models/userRolesModel.js';
import vehiculosModel from './../models/vehiculosModel.js';
import actaModel from './../models/actaModel.js';
import actaVehiculosModel from './../models/actaVehiculosModel.js';

import { initSeeders } from './../seeders/initSeeders.js';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT
});

const User = userModel(sequelize);
const Role = roleModel(sequelize);
const UserRoles = userRolesModel(sequelize);
const Vehiculos = vehiculosModel(sequelize);
const Acta = actaModel(sequelize);
const ActaVehiculos = actaVehiculosModel(sequelize);

User.belongsToMany(Role, { through: UserRoles, foreignKey: 'user_id' });
Role.belongsToMany(User, { through: UserRoles, foreignKey: 'role_id' });
Vehiculos.belongsToMany(Acta, { through: ActaVehiculos, foreignKey: 'vehiculo_id' });
Acta.belongsToMany(Vehiculos, { through: ActaVehiculos, foreignKey: 'acta_id' });

const initSequelize = async () => { 
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
        initSeeders();        
    } catch (error) {
        console.error('Unable to initialize Sequelize:', error);
    }
};

export { sequelize, User, Role, UserRoles, Vehiculos, Acta, ActaVehiculos, initSequelize };