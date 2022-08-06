import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Chip,
  Rating
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CardMovie = ({ movie }) => {
    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
          color: "#ff6d75",
        },
        "& .MuiRating-iconHover": {
          color: "#ff3d47",
        },
      });
	return (
        <Grid item xs={12} md={4} my={3}>
            <Card
            sx={{
                height: 400,
            }}
            >
                <CardMedia
                    component="img"
                    height="240"
                    sx={{
                    objectPosition: "top",
                    }}
                    image={movie.Poster}
                    alt="green iguana"
                />
                <CardContent
                    sx={{
                    cursor: "pointer",
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            {movie.Title}
                            </Typography>
                            <Typography variant="body1">{movie.Year}</Typography>
                            <Chip
                            label={movie.Type}
                            color="success"
                            size="small"
                            variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <StyledRating
                                max={1}
                                icon={<FavoriteIcon fontSize="inherit" />}
                                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
	);
};

export default CardMovie;