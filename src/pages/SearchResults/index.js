import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Services from "../../Services";

const SearchResults = () => {
    const { searchText } = useParams();

    async function getSearchResults() {
        const data = await Services.searchByText(searchText);
        console.log(data.Search);
    }

    useEffect(() => {
        getSearchResults();
    }, []);
};

export default SearchResults;