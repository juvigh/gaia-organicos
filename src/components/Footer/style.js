import styled from "styled-components";

export const Container = styled.div`
  /* border: solid; */
  background: #ffe7a8;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const AboutCompany = styled.div`
display: flex;
align-items: center;
padding: 5px;
justify-content: space-around;
margin-bottom: 10px;


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
    font-size: 13px;
    text-align: justify;
    width: 85%;
    margin-bottom: 5px;
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

`;

