import FormProduct from "../../../components/Forms/FormProduct/FormProduct";
import Header from "../../../components/Header/Header";

import { Container } from "../style";

function EditProduct() {
  return (
    <Container>
      <Header />
      <FormProduct titleForm="Edição" />
    </Container>
  );
}

export default EditProduct;
