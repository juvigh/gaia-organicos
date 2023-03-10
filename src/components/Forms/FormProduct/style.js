import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px 25px 20px 25px;
  width: 60vw;
  height: 75vh;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 600px) {
    width: 100vw;
  }

  p {
    font-size: 20px;
    color: #23663e;
    font-weight: 600;
    padding: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  span {
    margin-right: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 55vh;
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

  textarea {
    outline: none;
    border: none;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
    max-width: 100%;
    font-family: "Ubuntu", sans-serif;
    margin-bottom: 20px;
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

  #valueProduct {
    width: 30%;
    margin-bottom: 20px;
  }

  #imgProduct {
    box-shadow: none;
  }
`;
