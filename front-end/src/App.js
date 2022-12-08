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
import NewProduct from "./pages/NewProduct";
import CustomRing from "./pages/CustomRing";
import Store from "./pages/Store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-creative/front-end/build/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/react-creative/front-end/build/store" element={<Store />} />
          <Route path="/react-creative/front-end/build/product/:id" element={<Product />} />
          <Route path="/react-creative/front-end/build/newProduct" element={<NewProduct />} />
          <Route path="/react-creative/front-end/build/custom" element={<CustomRing />} />
          <Route path="/react-creative/front-end/build/gallery" element={<Gallery />} />
          <Route path="/react-creative/front-end/build/cart" element={<Cart />} />
          <Route path="/react-creative/front-end/build/about" element={<About />} />
          <Route path="/react-creative/front-end/build/*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
