import FormUser from "../../components/Forms/FormUser/FormUser";
import Header from "../../components/Header/Header.jsx";
import Alert from "../../components/Alert/Alert";

import axios from "axios";

import { useState } from "react";

import { Container } from "./style";

function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function createUser() {
    const res = await axios
      .post("http://localhost:5400/user", {
        name,
        email,
        password,
      })
      .catch(function (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      });

    if (res.data.newUser.id) {
      setTimeout(() => {
        window.location.assign("http://127.0.0.1:5173/login");
      }, 1000);
    }
  }

  return (
    <Container>
      <Header />
      <FormUser
        form="register"
        title="Cadastro"
        name={setName}
        email={setEmail}
        password={setPassword}
        send={createUser}
      />
      <Alert msg={msg}></Alert>
    </Container>
  );
}

export default RegisterUser;
