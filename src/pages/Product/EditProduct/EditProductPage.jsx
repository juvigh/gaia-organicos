import Alert from "../../../components/Alert/Alert";
import FormProduct from "../../../components/Forms/FormProduct/FormProduct";
import Header from "../../../components/Header/Header";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

import { Container } from "../style";

function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
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
       }, 1000)
    }
  }

  async function getAnProduct() {
    const res = await axios.get(
      `https://e-commerce-api-wh4h.onrender.com/product/${id}`
    );
    setProduct(res.data.product[0]);
  }

  async function editProduct() {
    const res = await axios
      .put(`https://e-commerce-api-wh4h.onrender.com/product/${id}`, {
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

    const productUpdate = res.data.updateProduct;
    if (productUpdate) {
      setMsg(res.data.msg)
      setTimeout(() => {
        navigate(`/product/${id}`);
      }, 1000);
    }
  }

  useEffect(() => {
    getAnUser();
    getAnProduct();
  }, [id]);

  return (
    <Container>
      <Header />
      <FormProduct
        titleForm="Edição"
        image={setImg}
        title={setTitle}
        description={setDescription}
        value={setValue}
        send={editProduct}
        valueImg={product.img}
        valueTitle={product.title}
        valueDescription={product.description}
        valueProduct={product.value}
      />
      <Alert msg={msg}> </Alert>
    </Container>
  );
}

export default EditProduct;
