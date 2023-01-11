import FormProduct from "../../../components/Forms/FormProduct/FormProduct";
import Header from "../../../components/Header/Header";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container } from "../style";

function EditProduct() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const userStorage = localStorage.getItem("user");
  const userId = JSON.parse(userStorage);

  async function getAnUser() {
    const res = await axios.get(`http://localhost:5400/user/${userId}`);
    setUser(res.data.user[0]);
  }

  if (!user) {
    setTimeout(() => {
      window.location.assign("http://127.0.0.1:5173/login");
    }),
      600;
  }

  useEffect(() => {
    getAnUser();
  }, [id]);

  return (
    <Container>
      <Header />
      <FormProduct titleForm="Edição" />
    </Container>
  );
}

export default EditProduct;
