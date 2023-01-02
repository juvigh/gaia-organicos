import { Link } from "react-router-dom";
import { Button, Container, Menu } from "./style";

function Header() {
  const logo = "/src/assets/svg/gaia_logo.svg";

  return (
    <Container>
      <Link to={"/products"}>
        <img src={logo} alt="logotipo" />
      </Link>

      <Menu>
        <Link to={"/register_product"}> Novo produto </Link>
        <Link to={"/products"}> Produtos </Link>

        <Link to={"/register"}>
        <Button> Cadastrar-se </Button>
        </Link>

        <Link to={"/login"}> 
        <Button login> Entrar </Button>
        </Link>
       
      </Menu>
    </Container>
  );
}

export default Header;
