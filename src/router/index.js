import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainView, SearchView } from "../pages";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainView />} />
				<Route path="/search" element={<SearchView />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
