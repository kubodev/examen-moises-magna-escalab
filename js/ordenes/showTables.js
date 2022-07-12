import {selectTables} from "../variables.js";

export const setTables = async (listTables) => {

    const aux = listTables; 
    const array = Object.entries(aux);

    const tablesListas =  array.map( table => {
        

        let div = '';
        if(table[1].available) {
            div = `
            <option value="${table[1].id}">${table[1].name}</option>
            `;
        }

        selectTables.innerHTML += div;

    });

    return tablesListas;
}

export const objtOrder = () => {

    
    let select = document.getElementById('mesaSelect');
    let value = parseInt(select.options[select.selectedIndex].value);
    
    let productName1 = parseInt(document.querySelector('#formulario-pedido-form input[name=producto1]').value);
    let productCant1 = parseInt(document.querySelector('#formulario-pedido-form input[name=cantidad1]').value);
    let productName2 = parseInt(document.querySelector('#formulario-pedido-form input[name=producto2]').value);
    let productCant2 = parseInt(document.querySelector('#formulario-pedido-form input[name=cantidad2]').value);

    const date = new Date();
    const token = window.localStorage.getItem('foodzero');
    const tokenObjt = JSON.parse(token);
    const typeUserid = parseInt(tokenObjt.id);


    const orderCreate = {
        "id": 235,
        "waiter": typeUserid,
        "created_at": date.getTime(),
        "table": value,
        "order": [
            {
                "product": productName1,
                "quantity": productCant1
            },
            {
                "product": productName2,
                "quantity": productCant2
            }
        ]
    }

    return orderCreate; 
}