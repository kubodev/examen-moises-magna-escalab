import {getInfoToken, putInfoToken} from "../services.js";
import {orders, tables} from "../api.js";
import {setOrders} from "./showOrdenes.js"
import {valUser, btnMenu, loginCerrarSession} from "../validacion.js";
import {setTables, objtOrder} from "./showTables.js";
import {formOrders} from "../variables.js";







const getOrders = async () => {
    const tokengetLS = valUser();
    const listOrders = await getInfoToken(orders,tokengetLS);
    setOrders(listOrders);

    const listTables = await getInfoToken(tables,tokengetLS);
    setTables(listTables);
}

getOrders();

const logSubmitOrder = async (event) => {
    event.preventDefault();

    const order = objtOrder();
    const tokengetLS = valUser();
    console.log(tokengetLS);
    const orderPut = await putInfoToken(orders,tokengetLS, order);
    console.log(orderPut);
}


formOrders.addEventListener('submit', logSubmitOrder);


//validaciones
loginCerrarSession();
btnMenu();