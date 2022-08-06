import { AuthProvider, MovieFavProvider } from "./context";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Router from "./router";

function App() {
	return (
		<AuthProvider>
			<MovieFavProvider>
				<ThemeProvider theme={theme}>
					<Router />
				</ThemeProvider>
			</MovieFavProvider>
		</AuthProvider>
	);
}

export default App;
