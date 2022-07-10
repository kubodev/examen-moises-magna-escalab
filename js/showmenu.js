import {divMenu} from "./variables.js";

export const setMenu =  (listMenu) => {

    const aux = listMenu 
    const array = Object.entries(aux);

    
    const menuListo = array.map(category => {
        const nameCategory = category[0] == 'jugos-bebidas'? 'Jugos y Bebidas' : category[0];
        const largoCar = category[1].length;

        const verMas = largoCar > 2 ? '<p class="btn-vermas">Ver más</p>': '';

        const platos2 = (arrayPlatos) => {
            let htmlPlatos  = "";
            for(let plato of arrayPlatos) {
                htmlPlatos += `
                <div class="one-product">
                    <p class="price">$${plato.price}</p>
                    <p class="name-product">${plato.name}</p>
                    <p class="description-product">${plato.description}</p>
                </div>
            `;
            }
            return htmlPlatos;
        }
       
        
        const div = `<div class="category" id="${nameCategory}">
            <h3 class="title">${nameCategory}</h3>
            <p class="subtitle">This is a section of your menu. Give your section a brief description</p>
            <div class="content-menu">
                <img src="${category[1][0].img}" alt="" >
                <div class="list-product incomplete">
                    ${platos2(category[1])}
                    ${verMas}
                </div>
            </div>
        </div>`;


        divMenu.innerHTML += div;

    });

    return menuListo;
}