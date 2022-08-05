import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Router from "./router";

function App() {
	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<Router />
			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;
