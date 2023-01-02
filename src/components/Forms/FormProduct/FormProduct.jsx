import { IoIosCreate } from "react-icons/io";
import { Container } from "./style";

function FormProduct(props) {
  return (
    <Container>
      <p>
        <span>
          <IoIosCreate size={26} />
        </span>
        {props.titleForm} de produto
      </p>

      <form>
        <label htmlFor="imgProduct"> Informe um imagem </label>
        <input
          id="imgProduct"
          type="file"
          onChange={(e) => props.image(e.target.files[0])}
        ></input>
        <label htmlFor="titleProduct"> Informe um titulo </label>
        <input
          id="titleProduct"
          type="text"
          placeholder="Digite um titulo..."
          onChange={(e) => props.title(e.target.value)}
        ></input>
        <label htmlFor="descripitonProduct"> Informe sua descrição </label>
        <textarea
          id="descriptionProduct"
          type="text"
          placeholder="Digite uma descrição"
          onChange={(e) => props.description(e.target.value)}
        ></textarea>
        <label htmlFor="valueProduct"> Informe um valor </label>
        <input
          id="valueProduct"
          type="number"
          min="0"
          placeholder="Digite um valor..."
          onChange={(e) => props.value(e.target.value)}
        ></input>
      </form>
      <button onClick={props.send}> Enviar </button>
    </Container>
  );
}

// meu placeholder ou value inicial serao info atual do produto selecionado
// farei isso se der tempo

export default FormProduct;
