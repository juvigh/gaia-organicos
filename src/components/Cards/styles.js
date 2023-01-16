import styled from "styled-components";

export const Container = styled.div`
  /* border: solid; */
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 39vh;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  border-radius: 3px;
  transition: all 0.2s;
  background: #ffffff;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);

  :hover {
    border: 0.3px solid #23663e;
    transform: scale(1.01, 1.01);
  }

  @media screen and (max-width: 600px) {
    width: 60vw;
    height: 35vh;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 25vw;
  }

  @media screen and (min-width: 1440px) {
    width: 15vw;
    height: 30vh;
  }
  
`;

export const ImgCard = styled.div`
  /* border-bottom: 1.5px solid #23663e; */
  width: 80%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  /* border: solid; */
  img {
    height: 100%;
    /* border-bottom: 0.5px solid #23663e; */
    width: 100%;
    /* margin-bottom: 20px; */
  }
`;

export const TextCard = styled.div`
  /* border: solid; */
  margin-bottom: 20px;
  padding: 5px;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h3 {
    font-size: 17px;
    margin-bottom: 13px;
  }

  p {
    font-size: 15px;
  }

  span {
    color: #23663e;
  }
`;
