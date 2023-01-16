import {
  AboutCompany,
  ContactCompany,
  Container,
  Copyright,
  IntroductionCompany,
  SocialMedia,
} from "./style";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <Container>
      <AboutCompany>
        <IntroductionCompany>
          <img src="src/assets/svg/gaia_logo_footer.svg"></img>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas
            maiores accusamus sunt sed quibusdam consectetur eius ab et.
            Commodi, aperiam! Dolorem consectetur ipsa placeat accusantium.
          </p>
        </IntroductionCompany>

        <SocialMedia>
          <p> Siga-nos nas redes sociais</p>
          <ul>
            <li>
              {" "}
              <BsFacebook size={25} color="#23663E" />
            </li>
            <li>
              <BsInstagram size={25} color="#23663E" />
            </li>
            <li>
              <BsTwitter size={25} color="#23663E" />
            </li>
            <li>
              <BsYoutube size={25} color="#23663E" />
            </li>
          </ul>
        </SocialMedia>
        <ContactCompany>
          <p>
            {" "}
            <span>GAIA LTDA</span> <br /> CNPJ sob o nº 13.043.813.001-00 <br />{" "}
            Sediada na Estrada do Cortume, 289 - Rio de Janeiro, RJ <br />
            TELEFONE: (21) 96513-4902{" "}
          </p>
        </ContactCompany>
      </AboutCompany>
      <Copyright>
         Copyright &copy; Gaia Orgânicos.
         Todos os direitos reservados.
      </Copyright>
    </Container>
  );
}

export default Footer;
