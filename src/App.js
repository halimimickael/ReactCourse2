
import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./comps/Header";
import Gallery from "./comps/Gallery";
import ApiShop from "./comps/ApiShop";
import Query from "./pages/Query";
import Foods from "./pages/Foods";
import Page404 from "./pages/Pages404";
import Games from "./comps/Games";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />}  />
        <Route path="/shop" element={<ApiShop />} />
        <Route path="/foods/:id_category" element={<Foods />} />
        <Route path="/query" element={<Query />} />
        <Route path="/games/:id_category" element={<Games />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;