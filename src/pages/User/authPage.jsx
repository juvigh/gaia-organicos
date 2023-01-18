import FormUser from "../../components/Forms/FormUser/FormUser";
import Header from "../../components/Header/Header";
import Alert from "../../components/Alert/Alert";

import axios from "axios";

import { useState } from "react";

import { Container } from "./style";
import { useNavigate } from "react-router-dom";

function AuthUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState(false);

  const navigate = useNavigate();

  async function authUser() {
    const res = await axios
      .post("https://e-commerce-api-wh4h.onrender.com/login", {
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
      setUser(true);
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

      {user ? (
        setTimeout(() => {
          navigate("/");
        }, 1000)
      ) : (
        <Alert msg={msg}></Alert>
      )}
    </Container>
  );
}

export default AuthUser;
