import { UserRoles } from './../database/initSequelize.js';

export const seedUserRoles = async () => {
    try {
        await UserRoles.create({
            user_id: 1,
            role_id: 1
        });
        console.log('Relacion Usuario/Rol creado con éxito.');        
    } catch (error) {
        console.error('Error al crear relacion Usuario/Rol: ', error);
    }
};