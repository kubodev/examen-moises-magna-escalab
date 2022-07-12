import {user, pass, errorDiv} from "../variables.js";
import {postInfo} from "../services.js";
import { login } from "../api.js";



export const logSubmit = async (event) => {
    event.preventDefault();

    if(user.value == "" ||  pass.value == "") {
    const textError = errorDiv.innerHTML = '<p>Ingresa Usuario y contraseña</p>';

        return textError;
    }

    const intento = window.localStorage.getItem('intento');
    //si no existe token te devuelve al home
    if(!intento) {
        window.localStorage.setItem('intento', '1' );
        errorDiv.innerHTML = '<p>Usuario y/o contraseña Erronea:<br>quedan 2 intentos</p>'
    } else {
        let intentoInt = parseInt(intento);
        let sumaIntento = intentoInt + 1;
        errorDiv.innerHTML = `<p>Usuario y/o contraseña Erronea:<br>quedan ${3 - sumaIntento} intentos</p>`;
        
        if(sumaIntento >= 3) {
            const date = new Date();


            window.localStorage.setItem('intento', 'bloqueado' );
            window.localStorage.setItem('tiempo',  );
        } else {
            
            
            errorDiv.innerHTML = `<p>Usuario y/o contraseña Erronea:<br>quedan ${3 - sumaIntento} intentos</p>`;
            window.localStorage.setItem('intento', sumaIntento.toString() );
        }
    }

    const infoLogin = {
        "client_id": user.value,
        "client_secret": pass.value,
        "audience": "https://escalab.academy",
        "grant_type": "client_credentials"
    };

    const tokenifo = await postInfo(login,infoLogin);
    const token = tokenifo.access_token;
    const typeuser = await JSON.parse(atob(tokenifo.access_token.split('.')[1])).roles[0];
    const typeid = await JSON.parse(atob(tokenifo.access_token.split('.')[1])).id;



    const tokenCustom = {
        type: typeuser,
        tokenPost: token,
        id: typeid
        
    };

    

    window.localStorage.setItem('foodzero', JSON.stringify(tokenCustom) );

    window.location.href =  "/pages/ordenes.html";
}





