import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Services from "../../Services";
import { CardMovie } from "../../components";

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const { searchText } = useParams();
  const history = useNavigate();

  async function getSearchResults() {
    const data = await Services.searchByText(searchText);
    // * Antes de setear el state, vamos a modificar el array y ponerle un precio random a cada item
    // con '...item' es el objeto pelicula (movie)
    const  alterData = data.Search.map((item) => {
      return {
        ...item,
        Price: (Math.random() * 10).toFixed(2),
      };
    });
        
    setMovies(alterData);
  }

  useEffect(() => {
    getSearchResults();
  }, []);

  function backButton() {
    history("/search");
  }
  
  return (
    <Box>
      <Container>
        <IconButton onClick={backButton}>
          <ArrowBackRoundedIcon color="success" />
        </IconButton>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                textTransform: "capitalize",
              }}
            >
              Search / {searchText}
            </Typography>
          </Grid>
          {movies.length > 0 &&
            movies.map((movie, index) => (
              <CardMovie movie={movie} key={index} />
            ))}
        </Grid>
      </Container>
    </Box>
    );
};

export default SearchResults;