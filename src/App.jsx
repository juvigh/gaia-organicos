import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "/src/pages/Product/ProductPage";
import DetailsProduct from "/src/pages/Product/DetailsProduct/DetailsProductPage";
import CreateProduct from "/src/pages/Product/CreateProduct/CreateProduct";
import EditProduct from "/src/pages/Product/EditProduct/EditProductPage";
import AuthUser from "/src/pages/User/AuthPage";
import RegisterUser from "/src/pages/User/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<DetailsProduct />} />
        <Route path="/register_product" element={<CreateProduct/>} />
        <Route path="/edit_product/:id" element={<EditProduct />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<AuthUser />} />
      </Routes>
    </Router>
  );
}

export default App;
