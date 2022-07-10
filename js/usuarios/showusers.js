import {divUsers} from "../variables.js";
import {setDate} from "./dateformart.js";

export const setUsers =  (listUsers) => {

    

    const userListo = listUsers.map(user => {
        
        const [rolAux] = user.roles;

        const rol = rolAux == 'admin'? 'Administrador': 'usuario';

        const fechaLista = setDate(user.birthday);


        const div = `
        <div class="one-user">
            <img src="${user.img}" alt="" >
            <div class="info-user">
                <p class="name">${user.name}</p>
                <p class="tipo">${rol}</p>
                <p class="compleanios">Cumpleaños:  ${fechaLista}</p>
                <p class="email">${user.email}</p>
                <p class="tel">${user.phone}</p>
            </div>
        </div>
            `;


        divUsers.innerHTML += div;

    });

    return userListo;
}