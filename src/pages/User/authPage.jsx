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

    if (res.data.userAuth.id) {
      window.location.assign("http://127.0.0.1:5173/products");
    }
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
      <Alert msg={msg}></Alert>
    </Container>
  );
}

export default AuthUser;
