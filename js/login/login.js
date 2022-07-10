import {user, pass, formLogin} from "../variables.js";
import {postInfo} from "../services.js";
import { login } from "../api.js";



export const logSubmit = async (event) => {
    event.preventDefault();

    if(user.value == "" ||  pass.value == "") {
        return console.log("algo vacio");
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


    const tokenCustom = {
        type: typeuser,
        tokenPost: token
    };

    

    window.localStorage.setItem('foodzero', JSON.stringify(tokenCustom) );
}





