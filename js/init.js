import { menu } from "./api.js";
import {getInfo} from "./services.js";
import {setMenu} from "./showmenu.js";
import {formLogin} from "./variables.js";
import {logSubmit} from "./login/login.js";

const consulta = async (menuarg) => {
    const objetoMenu = await getInfo(menuarg);
    setMenu(objetoMenu);
}

consulta(menu);

formLogin.addEventListener('submit', logSubmit);
