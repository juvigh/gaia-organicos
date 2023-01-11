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
        <label htmlFor="imgProduct"> Informe o caminho da imagem </label>
        <input
          id="imgProduct"
          type="text"
          onChange={(e) => props.image(e.target.value)}
          placeholder={
            props.valueImg === null || props.titleForm === "Cadastro"
              ? "Adicione o link da imagem..."
              : props.valueImg
          }
        ></input>
        <label htmlFor="titleProduct"> Informe um titulo </label>
        <input
          id="titleProduct"
          type="text"
          onChange={(e) => props.title(e.target.value)}
          placeholder={
            props.valueTitle === null || props.titleForm === "Cadastro"
              ? "Digite um título..."
              : props.valueTitle
          }
        ></input>
        <label htmlFor="descripitonProduct"> Informe sua descrição </label>
        <textarea
          id="descriptionProduct"
          type="text"
          onChange={(e) => props.description(e.target.value)}
          placeholder={
            props.valueDescription === null || props.titleForm === "Cadastro"
              ? "Digite uma descrição..."
              : props.valueDescription
          }
        ></textarea>
        <label htmlFor="valueProduct"> Informe um valor </label>
        <input
          id="valueProduct"
          type="number"
          min="0"
          onChange={(e) => props.value(e.target.value)}
          placeholder={
            props.valueProduct === null || props.titleForm === "Cadastro"
              ? "Digite um valor..."
              : props.valueProduct
          }
        ></input>
      </form>
      <button onClick={props.send}> Enviar </button>
    </Container>
  );
}

export default FormProduct;
