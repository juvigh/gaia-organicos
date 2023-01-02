import FormUser from "../../components/Forms/FormUser/FormUser";
import Header from "../../components/Header/Header.jsx";

import { Container } from "./style";

import axios from "axios";

import { useState } from "react";

function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function createUser() {
    await axios.post("http://localhost:5400/user", {
      name,
      email,
      password,
    });
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
    </Container>
  );
}

export default RegisterUser;
