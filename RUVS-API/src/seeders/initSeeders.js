import { sequelize } from '../database/initSequelize.js';

import { seedRoles } from './seedRoles.js';
import { seedUsers } from './seedUsers.js';
import { seedUserRoles } from './seedUserRoles.js';

export const initSeeders = async () => {
    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');   

    seedRoles();    
    seedUsers();
    seedUserRoles();

    console.log('Initial data has been added.');
}