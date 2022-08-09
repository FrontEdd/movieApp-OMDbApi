import { AuthProvider, MovieFavProvider, ShoppingCartProvider } from "./context";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Router from "./router";

function App() {
	return (
		<AuthProvider>
			<MovieFavProvider>
				<ShoppingCartProvider>
					<ThemeProvider theme={theme}>
						<Router />
					</ThemeProvider>
				</ShoppingCartProvider>
			</MovieFavProvider>
		</AuthProvider>
	);
}

export default App;
