import {getInfoToken} from "../services.js";
import {users} from "../api.js";
import {setUsers} from "../usuarios/showusers.js";
import {valUser} from "../validacion.js";







const getUsers = async () => {
    const tokengetLS = valUser();
    const listUser = await getInfoToken(users,tokengetLS);
    setUsers(listUser);
}

getUsers();