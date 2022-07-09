export const getInfo = async (url) => {
    const response = await fetch(url);
    console.log("en la api 1", response);
    if (!response.ok) {
        const message = `Ha ocurrido un error: ${response.status}`;
        throw new Error(message);
    }

    const info = await response.json();
    console.log("en la api2", info);
    return info;
} 