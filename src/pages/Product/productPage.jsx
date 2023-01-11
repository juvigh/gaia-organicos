import Cards from "../../components/Cards/Cards";
import Header from "../../components/Header/Header";
import InputSearch from "../../components/SearchBar/inputSearch";
import Footer from "../../components/Footer/Footer.jsx";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Main } from "./style";

function Products() {
  const [products, setProducts] = useState([]);

  const [inputText, setInputText] = useState("");

  const filterProducts = products.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      console.log(el)
      return el.title.toLowerCase().includes(inputText.toLowerCase());
    }
  });

  async function getProducts() {
    const res = await axios.get("http://localhost:5400/product");
    setProducts(res.data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <InputSearch product={products} inputHandler={setInputText} />
        <ul>
          {filterProducts.map((element) => (
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
