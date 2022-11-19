import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import About from "./pages/About";
import Cart from "./pages/Cart";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Product from "./pages/Product";
import Store from "./pages/Store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="react-creative/build/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="product" element={<Product />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
