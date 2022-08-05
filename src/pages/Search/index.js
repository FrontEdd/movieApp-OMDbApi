import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Box, Button, Card, CardContent, Container, Grid, IconButton, Stack, TextField, Toolbar, Typography } from "@mui/material";


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

    return (
        <>
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Edgar Razuri
                        </Typography>
                        <IconButton color="secondary"> 
                            <LogoutIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
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