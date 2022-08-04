import {
	Avatar,
	Box,
	Card,
	CardContent,
	Grid,
	Typography,
	Chip,
} from "@mui/material";

const CardMovie = ({ movie }) => {
	return (
		<Box my={3}>
			<Card>
				<CardContent
					sx={{
						cursor: "pointer",
					}}
				>
					<Grid container spacing={3}>
						<Grid item xs={2}>
							<Avatar
								sx={{ width: 100, height: 100 }}
								src={movie.Poster}
								variant="rounded"
							/>
						</Grid>
						<Grid item xs={10}>
							<Typography
								variant="h6"
								sx={{ fontWeight: "bold" }}
							>
								{movie.Title}
							</Typography>
							<Typography variant="body1">
								{movie.Year}
							</Typography>
							<Chip
								label={movie.Type}
								color="success"
								size="small"
								variant="outlined"
							/>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Box>
	);
};

export default CardMovie;