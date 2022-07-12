import {user, pass, errorDiv, btnLogin} from "../variables.js";
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
    }
    else if (intento == 'bloqueado') {


        const fechaActual = new Date();
        const fechaLocalStorage = window.localStorage.getItem('tiempo');
        const fechaLocalFormart = new Date(fechaLocalStorage);


        if(fechaActual > fechaLocalFormart) {

            window.localStorage.removeItem('intento');
            window.localStorage.removeItem('tiempo');
            btnLogin.removeAttribute('disabled');
        }

    } else {
        let intentoInt = parseInt(intento);

        let sumaIntento = intentoInt + 1;


        if(intentoInt >= 2) {
            const fecha = new Date();
            const minutos = 15;
            const fechaconminutos = fecha.setMinutes(fecha.getMinutes() + minutos);


            const nuevafecha = new Date(fechaconminutos);
            
            const year = nuevafecha.getFullYear() // return year
            const month = nuevafecha.getMonth() + 1 // return month(0 - 11)
            const date = nuevafecha.getDate() // return date (1 - 31)
            const hours = nuevafecha.getHours() // return number (0 - 23)
            const minutes = nuevafecha.getMinutes() // return number (0 -59)

            
            const fechaString =`${date}/${month}/${year} ${hours}:${minutes} hrs`;

            btnLogin.setAttribute('disabled', '');
            
            errorDiv.innerHTML = `<p>Intenta denuevo<br> ${fechaString}</p>`;
            window.localStorage.setItem('intento', 'bloqueado' );
            window.localStorage.setItem('tiempo', fechaString);
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





