import { useContext } from "react";
import { 
    Box, 
    Container, 
    Grid, 
    Typography, 
    Button 
} from "@mui/material";
import { CardMovie } from "../../components";
import { MovieFavContext } from "../../context";

const Favorites = () => {
	const { favMovies, cleanFavorites } = useContext(MovieFavContext);

	return (
		<Box>
			<Container>
				<Grid container spacing={3}>
					<Grid item xs={8}>
						<Typography
							variant="h6"
							sx={{
								textTransform: "capitalize",
							}}
						>
							Favorites
						</Typography>
					</Grid>
                    <Grid item xs={4}>
						{favMovies.length > 0 && (
							<Button
								variant="outlined"
								color="warning"
								onClick={cleanFavorites}
							>
								Clean
							</Button>
						)}
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