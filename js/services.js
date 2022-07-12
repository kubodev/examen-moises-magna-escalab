export const getInfo = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        const message = `Ha ocurrido un error: ${response.status}`;
        throw new Error(message);
    }

    const info = await response.json();

    return info;
}

export const postInfo = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const message = `Ha ocurrido un error: ${response.status}`;
        throw new Error(message);
    }

    const info = await response.json();

    return info;
}

export const getInfoToken = async (url, token) => {


    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
          }
    });

    if (!response.ok) {
        const message = `Ha ocurrido un error: ${response.status}`;
        throw new Error(message);
    }

    const info = await response.json();

    return info;
}

export const putInfoToken = async (url, token, data) => {


    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const message = `Ha ocurrido un error: ${response.status}`;
        throw new Error(message);
    }

    const info = await response.json();

    return info;
}