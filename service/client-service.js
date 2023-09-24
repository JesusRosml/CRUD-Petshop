//CRUD = 1-Create 2-Read 3-Update 4-Delete 
//Metodos = 1-POST 2-GET 3-PUT/PATCH 4-DELETE

const listaClientes = () => fetch("http://localhost:3000/perfil").then( (respuesta) => respuesta.json());

const crearClientes = (nombre, email) => {
    return fetch('http://localhost:3000/perfil', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nombre, email, id: uuid.v4()}),
    })
}

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: 'DELETE'
    });
}

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json() );
}

const actualizarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email }),
    }).then( respuesta => respuesta ).catch( err => console.log(err) );
}

export const clientServices = {
    listaClientes,
    crearClientes,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
}

