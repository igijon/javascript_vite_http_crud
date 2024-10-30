// Import all of Bootstrap's JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as CRUD from './src/js/crud-provider';

CRUD.getUsuario(1).then(console.log);