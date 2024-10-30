// Import all of Bootstrap's JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as CRUD from './src/js/crud-provider';

CRUD.getUsuario(1).then(console.log);
CRUD.crearUsuario({
    name: 'Luis',
    job: 'Software engineer'
}).then(console.log);
CRUD.actualizarUsuario(1, {
    name: 'Melisa',
    job: 'DevOps'
}).then(console.log);
CRUD.borrarUsuario(1).then(console.log);