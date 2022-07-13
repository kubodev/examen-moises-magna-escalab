import {boxLogin, btnLogin, errorDiv} from "./variables.js";

export const valAdmin = () => {

    const token = window.localStorage.getItem('foodzero');
    //si no existe token te devuelve al home
    if(!token) {
        window.location.href =  "/index.html";
    }

    const tokenObjt = JSON.parse(token);
    //comprobamos el tipo de usuario
    const typeUserToken = tokenObjt.type;


    const tipoCorrecto = typeUserToken === 'admin';

    if(!tipoCorrecto) {

        window.location.href =  "/index.html";
    }

    const tokenLocalStorage = tokenObjt.tokenPost;

    return tokenLocalStorage;

}

export const valUser = () => {

    const token = window.localStorage.getItem('foodzero');
    
    if(!token) {
        window.location.href =  "/index.html";
    }

    const tokenObjt = JSON.parse(token);
    //comprobamos el tipo de usuario
    const typeUserToken = tokenObjt.type;

    const tipoCorrecto = typeUserToken === 'admin' || typeUserToken === 'user';
    if(!tipoCorrecto) {
        window.location.href =  "/index.html";
    }

    const tokenLocalStorage = tokenObjt.tokenPost;

    return tokenLocalStorage;

}

export const loginCerrarSession = () => {
    const token = window.localStorage.getItem('foodzero');

    let btnLogin = '';

    if(!token) {
        btnLogin = '<a href="#miModal" class="btn-login" id="login">Iniciar sesión</a>';
    } else {
        btnLogin = '<a href="#" class="btn-login" id="cerrarSesion">Cerrar sesión</a>';
    }

    boxLogin.innerHTML = btnLogin;
}

export const btnMenu = () => {
    const cerrarSesion = document.querySelector('#cerrarSesion');

    if(!cerrarSesion) {
        return
    }

    cerrarSesion.addEventListener('click', () => {
        window.localStorage.removeItem('foodzero');
        const btnLogin = '<a href="#miModal" class="btn-login" id="login">Iniciar sesión</a>';
        boxLogin.innerHTML = btnLogin;
        window.location.href =  "/index.html";
    });
}

export const isblocked = () => {
    const intento = window.localStorage.getItem('intento');
    if (intento == 'bloqueado') {
        btnLogin.setAttribute('disabled', '');
        getTimeBlocked();
        validateBloqued();
    }
}

export const textBlocked = () => {
    console.log('Rechazo');
    const fecha = new Date();
    const minutos = 15;
    const fechaconminutos = fecha.setMinutes(fecha.getMinutes() + minutos);


    const nuevafecha = new Date(fechaconminutos);
    
    const year = nuevafecha.getFullYear() // return year
    const month = nuevafecha.getMonth() + 1 // return month(0 - 11)
    const date = nuevafecha.getDate() // return date (1 - 31)
    const hours = nuevafecha.getHours() // return number (0 - 23)
    const minutes = nuevafecha.getMinutes() // return number (0 -59)

    
    const fechaString =`${date}/${month}/${year} ${hours}:${minutes}`;

    btnLogin.setAttribute('disabled', '');
    
    errorDiv.innerHTML = `<p>Intenta denuevo<br> ${fechaString}</p>`;
    window.localStorage.setItem('intento', 'bloqueado' );
    window.localStorage.setItem('tiempo', fechaString);
    window.localStorage.setItem('hora', nuevafecha);
}

const getTimeBlocked = () => {
    const fechaString = window.localStorage.getItem('tiempo');

    errorDiv.innerHTML = `<p>Intenta denuevo<br> ${fechaString}</p>`;
}

export const validateBloqued = () => {
    const fechaActual = new Date();
    const fechaLocalStorage = window.localStorage.getItem('hora');
    const fechaLocalFormart = new Date(fechaLocalStorage);


    if(fechaActual.getTime() > fechaLocalFormart.getTime()) {
        console.log('entrooo');
        window.localStorage.removeItem('intento');
        window.localStorage.removeItem('tiempo');
        window.localStorage.removeItem('hora');
        btnLogin.removeAttribute('disabled');
        errorDiv.innerHTML = '';
    }
}