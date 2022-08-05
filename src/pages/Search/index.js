import { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import { MenuBar } from "../../components";
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Button, Card, CardContent, Container, Grid, Stack, TextField, Typography } from "@mui/material";


const Search = () => {
    const history = useNavigate();
    const [searchText, setSearchText] = useState("");

    const { user, logOut, isAuth } = useContext(AuthContext);

    // Almacenamos el input value:
    function searchInput(e) {
        setSearchText(e.target.value)
    }
    
    // Manejador del boton con el valor del input
    function searchButton() {
        if (searchText === "") return;
        history(`/search/${searchText}`)     
    }

    function logoutButton() {
		logOut()
        history("/")
	}
    if (!isAuth()) {
		return <Navigate to="/" />;
	}

    return (
        <>
            <Box>
                <MenuBar
                    text={user.name}
                    buttonClick={logoutButton}
                    buttonIcon={() => <LogoutIcon />}
                />
            </Box>
            <Container maxWidth="sm">
                <Grid container mt={6}>
					<Grid item xs={12}>
						<Card>
							<CardContent>
								<Typography variant="h2">
									OMDB Search
								</Typography>
								<Stack
									mt={2}
									direction="row"
									justifyContent="space-between"
									spacing={2}
								>
									<TextField
										label="Movie or tv show..."
										fullWidth
										onChange={searchInput}
									/>
									<Button
										variant="contained"
										fullWidth
										onClick={searchButton}
									>
										Search
									</Button>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
            </Container>
        </>
    )
};

export default Search;