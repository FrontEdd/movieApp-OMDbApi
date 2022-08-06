
// * Llamado a la API de OMDb y su respectiva key
const api = {
    apiUrl: "https://www.omdbapi.com",
    apiKey: "6c32014a", 
};

// * Generamos un arreglo con 3 usuarios diferentes
const authUsers = [
    {
        id: "001",
        username: "admin",
        name: "Admin",
        pass: "1234",
    },
    {
        id: "002",
        username: "edgar",
        name: "Edgar Razuri",
        pass: "1234",
    },
    {
        id: "003",
        username: "naty",
        name: "Nataly Peña",
        pass: "1234",
    },
];

const Config = {
    authUsers,
    api,
};

export default Config;