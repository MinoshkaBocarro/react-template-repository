import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
