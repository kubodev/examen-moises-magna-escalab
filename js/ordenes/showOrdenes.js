import {divOrders} from "../variables.js";
import {setDate, SetHora} from "../usuarios/dateformart.js";
import {getInfo} from "../services.js";
import { menu } from "../api.js";




export const setOrders = async (listOrders) => {

    const aux = listOrders; 
    const array = Object.entries(aux);
    const menuCompleto = await getInfo(menu);

    
    
    const menuListo =  array.map( order => {
        
        const orderOne = order[1];
        let mesero = orderOne.waiter;
        let imgMesero = '';
        switch (mesero) {
            case 1:
                mesero = "Madonna";
                imgMesero = 'http://ramosmerino.cl/gen6/madonna.jpg';
                break;
            case 2:
                mesero = "Dua Lipa";
                imgMesero = 'http://ramosmerino.cl/gen6/dua-lipa.webp';
                break;
            case 3:
                mesero = "Britney Spears";
                imgMesero = 'http://ramosmerino.cl/gen6/britney.jpg';
                break;
        
            default:
                mesero = "Mesero";
                imgMesero = 'http://placekitten.com/200/300';
                break;
        }
        const fechaLista = setDate(orderOne.created_at);
        const horalista = SetHora(orderOne.created_at);
        const idOrder = orderOne.id;
        const numMesa = orderOne.table;

        
        const aux2 = menuCompleto; 
        const array2 = Object.entries(aux2);
        const menuCompletoListo =  array2.findIndex( c => c[1].id == 2);
        

        //Aqui estooooooy
        console.log(menuCompletoListo);

        const platos2 = (arrayPlatos) => {
            let htmlPlatos  = "";
            for(let plato of arrayPlatos) {
                htmlPlatos += `
                <p>${plato.product}: ${plato.quantity}</p>
            `;
            }
            return htmlPlatos;
        }


        const div = `      
        <div class="one-order">
            <div class="mesero">
                <img src="${imgMesero}" alt="foto de ${mesero}" >
                <p class="name-mesero">${mesero}</p>
                <p class="fecha">${fechaLista}</p>
                <p class="hora">${horalista}</p>
                <p class="id">ID: ${idOrder}</p>
            </div>
            <div class="info-mesa">
                <div class="name-mesa">Mesa ${numMesa}</div>
                <div class="descrip-mesa">
                    ${platos2(orderOne.order)}
                </div>
                <div class="btn-entrega">
                    <p class="btn-entrega-mesa">Marcar como entregada</p><i class="material-icons">arrow_forward</i>
                </div>
            </div>
        </div>`;


        divOrders.innerHTML += div;

    });

    return menuListo;
}