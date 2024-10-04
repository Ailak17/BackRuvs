import { User } from './../database/initSequelize.js';

export const seedUsers = async () => {
    try {       
        await User.create({
            id: 1,
            name: "Secretaria",
            last_name: "General",
            telephone: "4291961",
            email: "ruvs@sg.gba.gob.ar",
            password: "$2b$10$DwS8ByBVKeeKmMj9vGVHb.bAazoDI9JklgZKOjGNL22NJbC8vX92a"
        });
        console.log('Usuario creado con éxito.');
    } catch (error) {
        console.error('Error al crear usuario:', error);
    }
};