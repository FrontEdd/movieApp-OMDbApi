import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuBar } from "../../components";
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Button, Card, CardContent, Container, Grid, Stack, TextField, Typography } from "@mui/material";


const Search = () => {
    const history = useNavigate();
    const [searchText, setSearchText] = useState("");

    // Almacenamos el input value:
    function searchInput(e) {
        setSearchText(e.target.value)
    }
    
    // Manejador del boton con el valor del input
    function searchButton() {
        if (searchText === "") return;
        history(`/search/${searchText}`)     
    }

    function hola() {
		console.log("HOLA");
	}

    return (
        <>
            <Box>
                <MenuBar
                    text={"Edgar"}
                    buttonClick={hola}
                    buttonIcon={() => <LogoutIcon />}
                />
            </Box>
            <Container maxWidth="sm">
                <Card sx={{marginTop: 20}}>
                    <CardContent>
                        <Grid>
                            <Box>
                                <Stack sx={{textAlign: 'center'}}>
                                    <Typography
                                        
                                        variant="h2"
                                    >
                                        OMDb Search
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction="row" spacing={1}>
                                    <TextField
                                        fullWidth
                                        label="Movie or tv Show"
                                        value={searchText}
                                        onChange={searchInput}
                                    />
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={searchButton}
                                    >
                                        Search
                                    </Button>
                                </Stack>
                            </Box>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
};

export default Search;