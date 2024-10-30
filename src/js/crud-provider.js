//https://reqres.in/
//Single user 
///api/users/2
const urlCRUD = 'https://reqres.in/api/users';
const getUsuario = async(id) => {
    //Obtengo el id del usuario
    const resp = await fetch(`${ urlCRUD }/${id}`);
    const {data} = await resp.json();
    return data;
}

const crearUsuario = async(usuario) => {
    const resp = await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json' //Decimos al backend que la información que mando es JSON
        }
    });
    return await resp.json();
}

const actualizarUsuario = async(id, usuario) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'PUT', //A veces hacen peticiones post para actualizar y el backend lo gestiona, pero lo correcto es PUT
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json' //Decimos al backend que la información que mando es JSON
        }
    });
    return await resp.json();
}


export {
    getUsuario,
    crearUsuario,
    actualizarUsuario
}