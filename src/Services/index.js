import config from "./config.js";


// crear la funcion searchByText(searchText)
// dentro harán un fetch, a esta url: 
// config.apiUrl + "?s=" + searchText + "&apikey=" + config.apiKey
export const searchByText = async (searchText) => {
    try {
        const response = await fetch(
            `${config.apiUrl}/?=${searchText}&apikey${config.apiKey}`
        )
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        return error;
    }
};
