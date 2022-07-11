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