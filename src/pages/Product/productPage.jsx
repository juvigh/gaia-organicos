import Cards from "../../components/Cards/Cards";
import Header from "../../components/Header/Header";
import InputSearch from "../../components/SearchProduct/inputSearch";
import Footer from "../../components/Footer/Footer.jsx";

import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Main } from "./style";



function Products() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const data = await axios.get("http://localhost:5400/product");
    setProducts(data.data.products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <InputSearch />
        <ul>
          {products.map((element) => (
            <li key={element.id}>
              <Link to={`/product/${element.id}`}>
                <Cards
                  img={element.img}
                  title={element.title}
                  value={element.value}
                />
              </Link>
            </li>
          ))}
        </ul>
      </Main>

      <Footer />
    </Container>
  );
}

export default Products;
