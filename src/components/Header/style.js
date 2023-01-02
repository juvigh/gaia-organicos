import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: solid; */
  background: #ffe7a8;
  height: 10vh;

  img {
    /* border: solid; */
    height: 10vh;
    margin-left: 20px;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 20px;
  width: 40vw;
  padding: 10px;

  a {
    text-decoration: none;
    color: #383636;
    transition: 0.5s;
    font-weight: 400;
  }

  a:hover {
    color: #000000;
  }
`;

export const Button = styled.button`
  background: #ffe7a8;
  border-radius: 3px;
  border: 1px solid #23663e;
  color: #23663e;
  padding: 8px;
  width: 8vw;
  cursor: pointer;
  transition: 0.5s;

  :hover {
      background: #23663e;
      color: white;
  }

  ${(props) =>
    props.login &&
    `
      background: #23663E;
      color: white;
      :hover {
          background: #258049;
      }
    `}
`;

