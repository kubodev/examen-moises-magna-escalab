import { menu } from "./api.js";
import {getInfo} from "./services.js";
import {setMenu} from "./showmenu.js";

const consulta = async (menuarg) => {
    console.log(menuarg);
    const objetoMenu = await getInfo(menuarg);
    setMenu(objetoMenu);

}

consulta(menu);