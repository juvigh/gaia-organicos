import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  justify-content: center;
  margin: 30px auto 200px auto;
  align-items: center;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    /* border: solid; */
    margin-top: 20px;
    gap: 15px;
  }

  li {
    /* border: solid; */
    /* width: 25%; */
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
