import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./style";

function InputSearch(props) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Busque aqui seu produto..."
        onChange={(e) => props.query(e.target.value)}
        value={props.value}
      />
      <button onClick={props.send}>
        <AiOutlineSearch size={25} color={"#FFFFF"} />
      </button>
    </Container>
  );
}

export default InputSearch;
