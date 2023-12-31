import { clientServices } from '../service/client-service.js';

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', ( event ) => {
    event.preventDefault(); //Previene la funcion que tienen por defecto los formularios 
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;

    clientServices.crearClientes(nombre, email).then(() => {
        window.location.href = '/screens/registro_completado.html'
    }).catch( err => console.log(err) );
});