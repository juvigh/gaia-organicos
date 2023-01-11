import { Container } from "./style";

function InputSearch(props) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Busque aqui seu produto..."
        onChange={(e) => props.inputHandler(e.target.value)}
      />
    </Container>
  );
}

export default InputSearch;
