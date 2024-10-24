import './style.css'
import { obtenerChiste } from "./src/js/http-provider";


obtenerChiste().then(console.log);