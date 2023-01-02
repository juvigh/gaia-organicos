import { Container } from "./style";
import { HiIdentification } from "react-icons/hi";

function FormUser(props) {
  return (
    <Container form={props.form}>
      <p>
        <span>
          <HiIdentification size={26} />
        </span>
        Formulario de {props.title}
      </p>
      <form>
        <label id="labelName"> Informe seu nome </label>
        <input
          id="inputName"
          type="text"
          placeholder="Digite um nome..."
          onChange={(e) => props.name(e.target.value)}
        ></input>
        <label> Informe seu E-mail </label>
        <input
          id="email"
          type="text"
          placeholder="Digite um email..."
          onChange={(e) => props.email(e.target.value)}
        ></input>
        <label> Informe uma senha </label>
        <input
          id="password"
          type="password"
          placeholder="Digite um senha..."
          onChange={(e) => props.password(e.target.value)}
        ></input>
      </form>
      <button onClick={props.send}> Enviar </button>
    </Container>
  );
}

export default FormUser;

// quando meu componente receber "login"
// ele vai dar display none no meu input de nome
// quando for register ele dar display flex
// eu vou especificar isso para o meu container
