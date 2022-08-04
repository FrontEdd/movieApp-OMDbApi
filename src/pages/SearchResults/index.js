import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
	Box,
	AppBar,
	Toolbar,
	Typography,
	Button,
	Container,
} from "@mui/material";

import Services from "../../Services";
import { CardMovie } from "../../components";

const SearchResults = () => {
    const [movies, setMovies] = useState([]);
	const { searchText } = useParams();
	const history = useNavigate();

    async function getSearchResults() {
		const data = await Services.searchByText(searchText);
		setMovies(data.Search);
		console.log(data.Search);
	}

	useEffect(() => {
		getSearchResults();
	}, []);

	function backButton() {
		history("/search");
	}
    return (
        <Box>
            <AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Search Results: "{searchText}"
					</Typography>
					<Button
						variant="outlined"
						color="error"
						onClick={backButton}
					>
						Back
					</Button>
				</Toolbar>
			</AppBar>
			<Container>
				{movies.length > 0 &&
					movies.map((movie, index) => (
						<CardMovie movie={movie} key={index} />
					))}
			</Container>
        </Box>
    );
};

export default SearchResults;