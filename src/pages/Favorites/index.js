import { useContext } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { CardMovie } from "../../components";

import { MovieFavContext } from "../../context";

const Favorites = () => {
	const { favMovies } = useContext(MovieFavContext);

	return (
		<Box>
			<Container>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Typography
							variant="h6"
							sx={{
								textTransform: "capitalize",
							}}
						>
							Favorites
						</Typography>
					</Grid>
					{favMovies.length > 0 &&
						favMovies.map((favorite, index) => (
							<CardMovie movie={favorite.movie} key={index} />
						))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Favorites;