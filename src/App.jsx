import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "./pages/Product/ProductPage";
import DetailsProduct from "./pages/Product/DetailsProduct/DetailsProductPage";
import CreateProduct from "./pages/Product/CreateProduct/CreateProduct";
import EditProduct from "./pages/Product/EditProduct/EditProductPage";
import AuthUser from "./pages/User/AuthPage";
import RegisterUser from "./pages/User/RegisterPage";
import SearchProduct from "./pages/Product/SearchProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<DetailsProduct />} />
        <Route path="register_product" element={<CreateProduct/>} />
        <Route path="edit_product/:id" element={<EditProduct />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="login" element={<AuthUser />} />
      </Routes>
    </Router>
  );
}

export default App;
