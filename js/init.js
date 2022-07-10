import { menu } from "./api.js";
import {getInfo} from "./services.js";
import {setMenu} from "./showmenu.js";
import {formLogin} from "./variables.js";
import {logSubmit} from "./login/login.js";

const consulta = async (menuarg) => {
    const objetoMenu = await getInfo(menuarg);
    setMenu(objetoMenu);

    
    let btnVerMas = document.querySelectorAll(".btn-vermas");
    btnVerMas.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.parentNode.classList.toggle("incomplete")

        });
    });

}

consulta(menu);
//formulario login
formLogin.addEventListener('submit', logSubmit);


  


