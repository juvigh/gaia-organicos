import { Container, ImgCard, TextCard } from "./styles";

function Cards(props) {
  return (
    <Container>
      <ImgCard>
        <img src={props.img}></img>
      </ImgCard>

      <TextCard>
        <h3> {props.title} </h3>
        <p>
          {" "}
          <span>R$ {props.value}</span> / Unidade{" "}
        </p>
      </TextCard>
    </Container>
  );
}

export default Cards;
