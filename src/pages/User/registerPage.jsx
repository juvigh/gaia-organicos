import FormUser from "../../components/Forms/FormUser/FormUser";
import Header from "../../components/Header/Header.jsx";
import Alert from "../../components/Alert/Alert";

import axios from "axios";

import { useState } from "react";

import { Container } from "./style";
import { useNavigate } from "react-router-dom";

function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState(false);

  const navigate = useNavigate();

  async function createUser() {
    const res = await axios
      .post("https://e-commerce-api-wh4h.onrender.com/user", {
        name,
        email,
        password,
      })
      .catch(function (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      });
    console.log(res.data.newUser.id);
    if (res.data.newUser) {
      setUser(true);
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

      {user ? (
        setTimeout(() => {
          navigate("/login");
        }, 1000)
      ) : (
        <Alert msg={msg}></Alert>
      )}
    </Container>
  );
}

export default RegisterUser;
