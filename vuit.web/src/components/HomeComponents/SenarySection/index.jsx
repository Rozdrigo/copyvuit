import LogoImage from "./assets/infinitypagelogo.png"
import FooterImage from "./assets/rdgpage.png"
import { SectionContainer } from "./styles";

function SenarySection() {
  return (
    <SectionContainer>
      <h4>LOCALIZAÇÃO:</h4>
      <br></br>
      <br></br>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.836859023891!2d-49.28117458498566!3d-25.443717183782077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce47a1da489ef%3A0x7196738ccfabf8be!2sR.%20Pasteur%2C%20463%20-%20Batel%2C%20Curitiba%20-%20PR%2C%2080250-104!5e0!3m2!1spt-BR!2sbr!4v1681478323239!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        Rua Pasteur, 463 - Água Verde -13 andar
        <br></br>Curitiba-PR
      </div>
      <br></br>
      <br></br>
      <br></br>
      <img src={LogoImage}/>
      <br></br>
      <br></br>
      <img src={FooterImage}/>
      <br></br>
    </SectionContainer>
  );
}

export default SenarySection;
