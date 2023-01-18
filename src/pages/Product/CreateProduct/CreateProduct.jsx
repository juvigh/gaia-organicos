import FormProduct from "../../../components/Forms/FormProduct/FormProduct";
import Header from "../../../components/Header/Header";

import { useEffect, useState } from "react";

import axios from "axios";
import { Container } from "./style";
import Alert from "../../../components/Alert/Alert";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const userStorage = localStorage.getItem("user");
  const userId = JSON.parse(userStorage);

  async function getAnUser() {
    const res = await axios.get(
      `https://e-commerce-api-wh4h.onrender.com/user/${userId}`
    );
    const userAuth = res.data.user[0];
    if (!userAuth) {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }

  async function createProduct(e) {
    e.preventDefault();
    const res = await axios
      .post("https://e-commerce-api-wh4h.onrender.com/product", {
        img,
        title,
        description,
        value,
      })
      .catch(function (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      });

    const createdProduct = res.data.newProduct;
    if (createdProduct) {
      setMsg(res.data.msg);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }

  useEffect(() => {
    getAnUser();
  }, []);
  // testar setTimeout com o window assign
  // se nao existir imagem, colocar  a logo da gaia

  return (
    <Container>
      <Header />
      <FormProduct
        titleForm="Cadastro"
        image={setImg}
        title={setTitle}
        description={setDescription}
        value={setValue}
        send={createProduct}
      />
      <Alert msg={msg}> </Alert>
    </Container>
  );
}

export default CreateProduct;
