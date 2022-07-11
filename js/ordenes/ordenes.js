import {getInfoToken} from "../services.js";
import {orders, tables} from "../api.js";
import {setOrders} from "./showOrdenes.js"
import {valUser, btnMenu, loginCerrarSession} from "../validacion.js";
import {setTables} from "./showTables.js";







const getOrders = async () => {
    const tokengetLS = valUser();
   const listOrders = await getInfoToken(orders,tokengetLS);
    setOrders(listOrders);

    const listTables = await getInfoToken(tables,tokengetLS);
    setTables(listTables);
}

getOrders();




//validaciones
loginCerrarSession();
btnMenu();