// Import all of Bootstrap's JS
import './src/scss/styles.scss'
import * as bootstrap from 'bootstrap'
import { obtenerChiste } from "./src/js/http-provider";


obtenerChiste().then(console.log);