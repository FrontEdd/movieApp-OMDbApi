import Config from "../config.js";


// crear la funcion searchByText(searchText)
// dentro harán un fetch, a esta url: 
// config.apiUrl + "?s=" + searchText + "&apikey=" + config.apiKey
const searchByText = async (searchText) => {
    const { api } = Config;
    try {
        const url =
        api.apiUrl + "?s=" + searchText + "&apikey=" + api.apiKey;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

const Services = {
    searchByText,
};

export default Services;
