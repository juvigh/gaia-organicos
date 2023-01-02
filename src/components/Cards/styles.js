import styled from "styled-components";

export const Container = styled.div`
  /* border: solid; */
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 35vh;
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
`;

export const ImgCard = styled.div`
  /* border-bottom: 1.5px solid #23663e; */
  width: 100%;
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

export const ButtonsCard = styled.div`
  margin-bottom: 10px;
  padding: 5px;
  height: 35%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.button`
  margin-bottom: 7px;
  border-radius: 3px;
  padding: 10px;
  width: 10vw;
  cursor: pointer;
  transition: 0.5s;
  color: white;
  border: none;

  ${(props) =>
    props.edit &&
    `
      background: #23663E; 
      :hover {
      background: #258049;
  }
    `}

  ${(props) =>
    props.delete &&
    `
      background: #F14E4E;
      :hover {
          background: #FA5C5C;
      }
    `}
`;
