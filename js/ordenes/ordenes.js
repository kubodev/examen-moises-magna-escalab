import {getInfoToken} from "../services.js";
import {orders, tables} from "../api.js";
import {setOrders} from "./showOrdenes.js"
import {valUser, btnMenu, loginCerrarSession} from "../validacion.js";







const getOrders = async () => {
    const tokengetLS = valUser();
    const listOrders = await getInfoToken(orders,tokengetLS);
    setOrders(listOrders);
}

getOrders();
loginCerrarSession();
btnMenu();