import { Box, Button, Card, CardContent, Container, Grid, Link, Stack, TextField, Typography } from "@mui/material";

const Search = () => {
    
    return (
        <Container contaner maxWidth="sm">
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
                                />
                                <Link>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                    >
                                        Search
                                    </Button>
                                </Link>
                            </Stack>
                        </Box>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
};

export default Search;