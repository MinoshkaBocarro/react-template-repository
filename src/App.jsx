// Import npm packages
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
