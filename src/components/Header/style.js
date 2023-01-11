import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: solid; */
  background: #ffe7a8;
  height: 10vh;
  width: 100%;

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
  /* width: 40vw; */
  gap: 15px;
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
  border-radius: 3px;
  border: 1px solid #23663e;
  padding: 8px;
  width: 8vw;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background: #23663e;
    color: white;
  }

  ${(props) =>
    props.register &&
    `
    background: #ffe7a8;
    color: #23663e;
    `}

  ${(props) =>
    props.registerOut &&
    `
    display: none;
    background: #ffe7a8;
    color: #23663e;
    `}

  ${(props) =>
    props.login &&
    `
      background: #23663E;
      color: white;
      :hover {
          background: #258049;
      }
    `}

  ${(props) =>
    props.loginOut &&
    `
      display: none;
      background: #23663E;
      color: white;
      :hover {
          background: #258049;
      }
    `}

  ${(props) =>
    props.logout &&
    `
      background: #23663E;
      color: white;
      :hover {
          background: #258049;
      }
    `}

  ${(props) =>
    props.logoutOut &&
    `
      display: none;
      background: #23663E;
      color: white;
      :hover {
          background: #258049;
      }
    `}
`;
