import { useContext } from "react";
import { 
    Box, 
    Container, 
    Grid, 
    Typography, 
    Button 
} from "@mui/material";
import Swal from "sweetalert2";
import { CardMovie } from "../../components";
import { MovieFavContext } from "../../context";

const Favorites = () => {
	const { favMovies, cleanFavorites } = useContext(MovieFavContext);
    
    function cleanButton() {
		Swal.fire({
			title: "Clean all Favorites?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Clean!",
		}).then((result) => {
			if (result.isConfirmed) {
				cleanFavorites();
				Swal.fire("Cleaned!", "0 favorited movies.", "success");
			}
		});
	}

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
								onClick={cleanButton}
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