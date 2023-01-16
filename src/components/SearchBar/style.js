import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  padding: 5px;
  max-width: 100vw;
  justify-content: center;
  /* justify-content: space-around; */
  margin-top: 2rem;
  /* border: solid; */

  input {
    outline: none;
    width: 75vw;
    border: none;
    background: #ffe7a8;
    padding: 10px;
    border-radius: 3px;
    border: 0.5px solid #23663e;
  }

  button {
    border: none;
    background: #23663e;
    cursor: pointer;
    padding: 4px;
    margin-left: 5px;
    color: white;
    border-radius: 3px;
    width: 10vw;
    transition: all 0.3s;

    :hover {
      background: #258049;
    }
  }
`;
