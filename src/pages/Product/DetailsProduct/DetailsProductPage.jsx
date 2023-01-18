import Header from "../../../components/Header/Header";
import Alert from "../../../components/Alert/Alert";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Button, Buttons, Container, Img, Main, Text } from "./style";

function DetailsProduct() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [product, setProduct] = useState([]);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  async function getAnProduct() {
    const res = await axios.get(
      `https://e-commerce-api-wh4h.onrender.com/product/${id}`
    );
    setProduct(res.data.product[0]);
  }

  const userStorage = localStorage.getItem("user");
  const userId = JSON.parse(userStorage);

  async function getAnUser() {
    const res = await axios.get(
      `https://e-commerce-api-wh4h.onrender.com/user/${userId}`
    );
    setUser(res.data.user[0]);
  }

  async function deleteProduct() {
    if (!user) {
      setMsg("Você precisa estar logado");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      const res = await axios.delete(
        `https://e-commerce-api-wh4h.onrender.com/product/${id}`
      );
      setMsg(res.data.msg);

      if (res.data.msg) {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    }
  }

  useEffect(() => {
    getAnUser();
    getAnProduct();
  }, [id]);

  // se nao existir produto, mandar o usuario para a pagina de produtos

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
          <p>
            <span>R$ {product.value}</span> / Unidade
          </p>
          <Buttons>
            <Button delete onClick={deleteProduct}>
              {" "}
              Apagar produto{" "}
            </Button>
            <Link to={`/edit_product/${product.id}`}>
              <Button edit> Editar produto </Button>
            </Link>
          </Buttons>
          <Alert msg={msg}></Alert>
        </Text>
      </Main>
    </Container>
  );
}

export default DetailsProduct;
