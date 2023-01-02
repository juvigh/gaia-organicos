import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 50px auto;
  width: 60vw;
  height: 60vh;
  align-items: center;
  padding: 10px;

  p {
    font-size: 20px;
    color: #23663e;
    font-weight: 600;
    padding: 5px;
    display: flex;
    align-items: center;
  }

  span {
    margin-right: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 45vh;
    width: 90%;
    padding: 5px;
  }

  label {
    margin-bottom: 5px;
  }

  input {
    outline: none;
    border: none;
    padding: 10px;
    border-radius: 3px;
    transition: 0.5s;
    margin-bottom: 20px;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
  }

  button {
    color: #ffffff;
    background: #23663e;
    width: 50%;
    padding: 10px;
    border-radius: 3px;
    outline: none;
    border: none;
    transition: 0.5s;
  }

  button:hover {
    background: #258049;
  }

  ${(props) =>
    props.form === "login" &&
    `
      #inputName {
        display: none;
      }

      #labelName {
        display: none;
      }

      form {
        height: 30vh;
      }
    `}
`;
