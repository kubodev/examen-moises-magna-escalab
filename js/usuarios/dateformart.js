export const setDate = (fecha) => {

    const time = fecha;
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate() + 1;


    let mes;
    
    switch (month) {
        case 1:
            mes = 'enero';
            break;
        case 2:
            mes = 'febrero';
            break;
        case 3:
            mes = 'marzo';
            break;
        case 4:
            mes = 'abril';
            break;
        case 5:
            mes = 'mayo';
            break;
        case 6:
            mes = 'junio';
            break;
        case 7:
            mes = 'julio';
            break;
        case 8:
            mes = 'agosto';
            break;
        case 9:
            mes = 'septiembre';
            break;
        case 10:
            mes = 'octubre';
            break;
        case 11:
            mes = 'noviembre';
            break;
        case 12:
            mes = 'diciembre';
            break;
    };
    

    let fechLista = `${day} de ${mes} de ${year}`;

    return fechLista;
}

export const SetHora = (fecha) => {
    const time = fecha;
    const date = new Date(time);

    const hora = date.getHours();
    const minutes = date.getMinutes();

    const horaLista = `${hora}:${minutes}`;

    return horaLista;

}