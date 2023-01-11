import FormProduct from "../../../components/Forms/FormProduct/FormProduct";
import Header from "../../../components/Header/Header";

import { useEffect, useState } from "react";

import axios from "axios";
import { Container } from "./style";
import Alert from "../../../components/Alert/Alert";

function CreateProduct() {
  const [user, setUser] = useState([]);
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [msg, setMsg] = useState("");

  const userStorage = localStorage.getItem("user");
  const userId = JSON.parse(userStorage);

  async function getAnUser() {
    const res = await axios.get(`http://localhost:5400/user/${userId}`);
    setUser(res.data.user[0])
  }

  if (!user) {
    setTimeout(() => {
      window.location.assign("http://127.0.0.1:5173/login");
    }), 600;
  }

  async function createProduct() {
    const res = await axios
      .post("http://localhost:5400/product", {
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

    if (res.data) {
      setMsg(res.data.msg);
      setTimeout(() => {
        window.location.assign("http://127.0.0.1:5173/");
      }, 1000);
    }
  }

  useEffect(() => {
    getAnUser()
  }, [])
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
