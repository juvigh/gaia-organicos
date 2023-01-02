import FormUser from "../../components/Forms/FormUser/FormUser";
import Header from "../../components/Header/Header";

import axios from "axios";

import { useState } from "react";

import { Container } from "./style";

function AuthUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function authUser() {
    await axios.post("http://localhost:5400/login", {
      email,
      password,
    });
  }

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
    </Container>
  );
}

export default AuthUser;
