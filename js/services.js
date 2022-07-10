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