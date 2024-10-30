// Import all of Bootstrap's JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { obtenerUsuarios } from "./src/js/http-provider";

console.log(await obtenerUsuarios());