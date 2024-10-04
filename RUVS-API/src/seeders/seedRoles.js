import { Role } from './../database/initSequelize.js';

export const seedRoles = async () => {
    try {
        await Role.bulkCreate([
            { 
                id: 1,
                name: 'administrator' 
            },
            {
                id: 2, 
                name: 'user' 
            }
        ]);
        console.log('Roles creado con éxito.');        
    } catch (error) {
        console.error('Error al crear rol:', error);
    }
};