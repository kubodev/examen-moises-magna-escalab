import {getInfoToken} from "../services.js";
import {users} from "../api.js";
import {setUsers} from "../usuarios/showusers.js";
import {valAdmin, loginCerrarSession, btnMenu} from "../validacion.js";







const getUsers = async () => {
    const tokengetLS = valAdmin();
    const listUser = await getInfoToken(users,tokengetLS);
    setUsers(listUser);
}

getUsers();
loginCerrarSession();
btnMenu();