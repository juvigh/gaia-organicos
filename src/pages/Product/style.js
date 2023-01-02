import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  justify-content: center;
  margin: 30px auto;
  align-items: center;

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
