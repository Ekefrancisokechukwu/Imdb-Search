import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Components/useFetch";
import SharedLayouts from "./pages/SharedLayouts";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import User from "./pages/User";
import SingleProdPage from "./pages/SingleProdPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayouts />}>
            <Route index element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<SingleProdPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
