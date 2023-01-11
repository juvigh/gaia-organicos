import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  justify-content: center;
  margin: 30px auto;
  align-items: center;
  /* border: solid; */

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    /* border: solid; */
    margin-top: 20px;
    gap: 5px;
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
