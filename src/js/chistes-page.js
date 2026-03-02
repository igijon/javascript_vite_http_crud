import { obtenerChiste } from "./http-provider";

console.log("Hola mundo desde chistes-page.js");
const body = document.body;
let btnOtro, olList;  //Estos elementos aún no están creados en el HTML 

const crearChistesHtml = () => {
    const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>
    <button class="btn btn-primary">Otro chiste </button>
    <ol class="mt-2 list-group">
    </ol>
    `;
    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    body.append(divChistes);
    console.log("HTML creado");
}


const eventos =  () => {
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');
    btnOtro.addEventListener('click', async () => {
        btnOtro.disable = true;
        console.log("Obteniendo chiste...");
        dibujarChiste( await obtenerChiste() );
        btnOtro.disable = false;
    })
}

//Chiste {id, value}
const dibujarChiste = ( chiste ) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `<strong>${ chiste.id }</strong>: ${chiste.value}`;
    olItem.classList.add('list-group-item');
    olList.append(olItem);
}


export const init = () => {
    crearChistesHtml();
    eventos();
}