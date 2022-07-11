import {boxLogin} from "./variables.js";

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
    console.log(tipoCorrecto);
    if(!tipoCorrecto) {
        console.log("deberia estar aqui")
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
        btnLogin = '<a href="#miModal" class="btn-login">Iniciar sesión</a>';
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
        const btnLogin = '<a href="#miModal" class="btn-login">Iniciar sesión</a>';
        boxLogin.innerHTML = btnLogin;
        window.location.href =  "/index.html";
    });
}