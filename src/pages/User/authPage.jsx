import FormUser from "../../components/Forms/FormUser/FormUser";
import Header from "../../components/Header/Header";
import Alert from "../../components/Alert/Alert";

import axios from "axios";

import { useState } from "react";

import { Container } from "./style";

function AuthUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function authUser() {
    const res = await axios
      .post("http://localhost:5400/login", {
        email,
        password,
      })
      .catch(function (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      });

    const userAuth = res.data.userAuth.id;
    if (userAuth) {
      localStorage.setItem("user", JSON.stringify(userAuth));
      setTimeout(() => {
        window.location.assign("http://127.0.0.1:5173/");
      }, 1000);
    }
  }

  // vou pegar esse id e verificar se existe ele 
  // caso exista, as configuraçÕes do header irao mudar
  // o botao de cadastro vai ficar none e o botao de entrar
  // vira botao "sair"

  return (
    <Container>
      <Header />
      <FormUser
        form="login"
        title="Login"
        email={setEmail}
        password={setPassword}
        send={authUser}
      />
      <Alert msg={msg}></Alert>
    </Container>
  );
}

export default AuthUser;
