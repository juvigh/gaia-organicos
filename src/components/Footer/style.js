import styled from "styled-components";

export const Container = styled.div`
  /* border: solid; */
  background: #ffe7a8;
  /* padding: 5px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutCompany = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: space-around;
  margin-bottom: 30px;
  margin-top: 30px;
  /* border: solid; */

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const IntroductionCompany = styled.div`
  /* border: solid; */
  width: 35%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;

  img {
    width: 90%;
  }

  p {
    font-size: 15px;
    text-align: justify;
    width: 85%;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const SocialMedia = styled.div`
  /* border: solid; */
  width: 25%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  justify-content: space-evenly;

  ul {
    display: flex;
    justify-content: space-around;
    padding: 5px;
    width: 100%;
  }

  li {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ContactCompany = styled.div`
  /* border: solid; */
  width: 40%;
  height: 20vh;
  padding: 5px;

  p {
    margin-top: 1.8rem;
    margin-left: 1.8rem;
  }

  span {
    font-weight: 600;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    p {
      margin-top: 0;
    }
  }
`;

export const Copyright = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #258049;
  padding: 12px;
`;
