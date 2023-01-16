import styled from "styled-components";

export const Container = styled.div`
  /* border: solid; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  display: flex;
  width: 80%;
  height: 70vh;
  margin: 60px auto;
  /* border: solid; */
  gap: 25px;
  padding: 10px;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    width: 100%;
    height: auto;
  }
`;

export const Img = styled.div`
  /* border: solid; */
  width: 60%;
  height: 60vh;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
    height: 40vh;
  }
`;
export const Text = styled.div`
  /* border: solid; */
  width: 50%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 600px) {
    width: 80%;
    height: 50vh;
  }

  h1 {
    font-weight: bold;
    font-size: 20px;
    /* border: solid; */
  }

  p {
    /* border: solid; */
    width: 100%;
  }

  span {
    color: #23663e;
    font-size: 20px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Button = styled.button`
  margin-bottom: 8px;
  color: #ffffff;
  padding: 10px;
  border-radius: 3px;
  outline: none;
  border: none;
  transition: all 0.3s;

  ${(props) =>
    props.delete &&
    `
  background: #FB4E4E;

  :hover {
    background: #FA5C5C;
  }
  `}

  ${(props) =>
    props.edit &&
    `
  background: #23663E;
  width: 100%;

  :hover {
    background: #258049;
  }
  `}
`;
