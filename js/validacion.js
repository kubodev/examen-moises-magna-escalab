export const valAdmin = () => {

    const token = window.localStorage.getItem('foodzero');
    //si no existe token te devuelve al home
    if(!token) {
        window.location.href =  "/index.html";
    }

    const tokenObjt = JSON.parse(token);
    //comprobamos el tipo de usuario
    const typeUserToken = tokenObjt.type;
    if(!typeUserToken == 'admin') {
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
    if(!typeUserToken == 'admin' || !typeUserToken == 'user') {
        window.location.href =  "/index.html";
    }

    const tokenLocalStorage = tokenObjt.tokenPost;

    return tokenLocalStorage;

}