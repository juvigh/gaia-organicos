import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Menu } from "./style";

function Header() {
  const logo = "/src/assets/svg/gaia_logo.svg";

  const [user, setUser] = useState([]);

  const userStorage = localStorage.getItem("user");
  const userId = JSON.parse(userStorage);

  async function getAnUser() {
    const res = await axios.get(`http://localhost:5400/user/${userId}`);
    setUser(res.data.user[0]);
  }

  async function logoutUser() {
    localStorage.removeItem("user");
    setTimeout(() => {
      window.location.assign(`http://127.0.0.1:5173/register`);
    }, 1000);
  }

  useEffect(() => {
    getAnUser();
  }, []);

  return (
    <Container>
      <Link to={"/"}>
        <img src={logo} alt="logotipo" />
      </Link>

      <Menu>
        <Link to={"/register_product"}> Novo produto </Link>
        <Link to={"/ "}> Produtos </Link>

        {user ? (
          <Link to={"/register"}>
            <Button registerOut> Cadastrar-se </Button>
          </Link>
        ) : (
          <Link to={"/register"}>
            <Button register> Cadastrar-se </Button>
          </Link>
        )}

        {user ? (
          <Link to={"/login"}>
            <Button loginOut> Entrar </Button>
          </Link>
        ) : (
          <Link to={"/login"}>
            <Button login> Entrar </Button>
          </Link>
        )}

        {user ? (
          <Button logout onClick={logoutUser}>
            {" "}
            Sair{" "}
          </Button>
        ) : (
          <Button logoutOut> Sair </Button>
        )}
      </Menu>
    </Container>
  );
}

// em um botao, quando existir um usuario, ele vai receber uma propriedade e dar
// display none

// no outro botao, quando existir um usuario, ele vai receber o texto "sair"
// e executar a função de remover o item salvo

// ou, se tiver usuario, o meu botao de sair vai receber uma propriedade
// que vai ativar o botao

export default Header;
