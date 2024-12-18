import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Page404 from "./pages/Page404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
