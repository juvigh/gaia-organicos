import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  ButtonsMob,
  ChangeMob,
  Container,
  Menu,
  MenuMob,
} from "./style";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function Header() {
  const logo = "/svg/gaia_logo.svg";

  let navigate = useNavigate();

  const [menuMobile, setMenuMobile] = useState(false);
  const [user, setUser] = useState([]);

  const userStorage = localStorage.getItem("user");
  const userId = JSON.parse(userStorage);

  async function getAnUser() {
    const res = await axios.get(
      `https://e-commerce-api-wh4h.onrender.com/user/${userId}`
    );
    setUser(res.data.user[0]);
  }

  async function logoutUser() {
    localStorage.removeItem("user");
  }

  useEffect(() => {
    getAnUser();
  }, []);

  return (
    <>
      {menuMobile ? (
        <MenuMob activeMenu>
          <IoClose
            size={45}
            color={"#23663e"}
            onClick={() => setMenuMobile(false)}
          />
          <nav>
            <Link to={"/register_product"}> Novo produto </Link>
            <Link to={"/ "}> Produtos </Link>

            {user ? (
              <ButtonsMob href={"/register"} registerOut>
                {" "}
                Cadastrar-se{" "}
              </ButtonsMob>
            ) : (
              <Link to={"/register"}>
                <ButtonsMob> Cadastrar-se </ButtonsMob>
              </Link>
            )}

            {user ? (
              <ButtonsMob href={"/login"} loginOut>
                {" "}
                Entrar{" "}
              </ButtonsMob>
            ) : (
              <Link to={"/login"}>
                <ButtonsMob> Entrar </ButtonsMob>
              </Link>
            )}

            {user ? (
              <ButtonsMob
                onClick={() => {
                  logoutUser(),
                    setTimeout(() => {
                      navigate("/login");
                    }, 1000);
                }}
              >
                {" "}
                Sair{" "}
              </ButtonsMob>
            ) : (
              <Button logoutOut> Sair </Button>
            )}
          </nav>
        </MenuMob>
      ) : (
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
              <Button
                logout
                onClick={() => {
                  logoutUser(),
                    setTimeout(() => {
                      navigate("/login");
                    }, 1000);
                }}
              >
                {" "}
                Sair{" "}
              </Button>
            ) : (
              <Button logoutOut> Sair </Button>
            )}
          </Menu>

          <ChangeMob onClick={() => setMenuMobile(true)}>
            <FiMenu size={35} color={"#23663e"}></FiMenu>
          </ChangeMob>
        </Container>
      )}
    </>
  );
}

// em um botao, quando existir um usuario, ele vai receber uma propriedade e dar
// display none

// no outro botao, quando existir um usuario, ele vai receber o texto "sair"
// e executar a função de remover o item salvo

// ou, se tiver usuario, o meu botao de sair vai receber uma propriedade
// que vai ativar o botao

export default Header;
