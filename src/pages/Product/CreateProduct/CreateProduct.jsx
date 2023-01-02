import FormProduct from "../../../components/Forms/FormProduct/FormProduct";
import Header from "../../../components/Header/Header";

import { useState } from "react";

import axios from "axios";
import { Container } from "./style";

function CreateProduct() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);

  async function createProduct() {
    await axios.post("http://localhost:5400/product", {
      image,
      title,
      description,
      value,
    });
  }

  return (
    <Container>
      <Header />
      <FormProduct
        titleForm="Cadastro"
        image={setImage}
        title={setTitle}
        description={setDescription}
        value={setValue}
        send={createProduct}
      />
    </Container>
  );
}

export default CreateProduct;
