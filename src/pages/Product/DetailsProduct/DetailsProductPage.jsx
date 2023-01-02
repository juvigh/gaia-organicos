import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import { Button, Buttons, Container, Img, Main, Text } from "./style";

function DetailsProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  async function getAnProduct() {
    const data = await axios.get(`http://localhost:5400/product/${id}`);
    console.log(data.data.product[0]);
    setProduct(data.data.product[0]);
  }

  useEffect(() => {
    getAnProduct();
  }, [id]);

  return (
    <Container>
      <Header />
      <Main>
        <Img>
          <img src={product.img}></img>
        </Img>

        <Text>
          <h1> {product.title}</h1>
          <p>{product.description}</p>
          <Buttons>
            <Button delete> Apagar produto </Button>
            <Link to={`/edit_product/${product.id}`}>
              <Button edit> Editar produto </Button>
            </Link>
          </Buttons>
        </Text>
      </Main>
    </Container>
  );
}

export default DetailsProduct;
