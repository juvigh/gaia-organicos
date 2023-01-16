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
    margin-top: 5px;
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

  @media screen and (max-width: 900px) {
    display: none;
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

export const ChangeMob = styled.button`
  display: block;
  margin-right: 20px;
  background: none;
  border: none;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const MenuMob = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: none;
  background: linear-gradient(
    0deg,
    rgba(36, 36, 36, 0.7),
    rgba(36, 36, 36, 0.7)
  );
  backdrop-filter: blur(3px);

  > svg {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  nav {
    position: absolute;
    top: 6rem;
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 100%;
    align-items: center;
    gap: 2rem;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    color: white;
  }

  ${(props) =>
    props.activeMenu &&
    `
    display: block;
    `}
`;

export const ButtonsMob = styled.button`
  background: none;
  font-size: 16px;
  font-family: "Ubuntu", sans-serif;
  color: white;
  display: block;
  border: none;

  ${(props) =>
    props.registerOut &&
    `
    display: none;
    `}

  ${(props) =>
    props.loginOut &&
    `
      display: none;
    `}

  ${(props) =>
    props.logoutOut &&
    `
      display: none;
    `}
`;
