create ./.env:
PORT=3000
HOST=localhost
DB_HOST=ip_database
DB_PORT=3306
DB_NAME=database_name
DB_USER=admin
DB_PASSWORD=root_password
DB_DIALECT=mysql
JWT_SECRET=secret

vehiculoSchema = {
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
    nro_solicitud : nro_solicituds,
    obserbaciones : obserbaciones
}

endpoints:
https://localhost:3000/api/users
https://localhost:3000/api/users/1
https://localhost:3000/api/roles
https://localhost:3000/api/roles/1
https://localhost:3000/api/actas
https://localhost:3000/api/actas/1
https://localhost:3000/api/vehiculos
https://localhost:3000/api/uvehiculos/1