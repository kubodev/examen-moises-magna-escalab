import { menu } from "./api.js";
import {getInfo} from "./services.js";
import {setMenu} from "./showmenu.js";
import {formLogin, errorDiv} from "./variables.js";
import {logSubmit} from "./login/login.js";
import {loginCerrarSession, btnMenu, isblocked} from "./validacion.js";

const consulta = async (menuarg) => {
    const objetoMenu = await getInfo(menuarg);
    setMenu(objetoMenu);

    //ponber la clase en el boton
    let btnVerMas = document.querySelectorAll(".btn-vermas");
    btnVerMas.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.parentNode.classList.toggle("incomplete")
        });
    });
    loginCerrarSession();

    btnMenu();

}

consulta(menu);
//formulario login
formLogin.addEventListener('submit', logSubmit);
document.querySelector('#login').addEventListener('click', ()=>{
    
    const intento = window.localStorage.getItem('intento');

    if(intento) {
        let intentoInt = parseInt(intento);
        errorDiv.innerHTML = `<p>Usuario y/o contraseña Erronea:<br>quedan ${3 - intentoInt} intentos</p>`;
    }
});

isblocked();
  


