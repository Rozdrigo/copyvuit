import WhatsappGreenButton from "../../WhatsappGreenButton";
import TelephoneButton from "../../TelephoneButton";
import { ContainerSection } from './styles';


function QuinarySection() {
  return (
    <ContainerSection>
      <h4>CONTATOS:</h4>
      <br></br>
      <br></br>
      <iframe
        scrolling="no"
        className="instagram-media instagram-media-rendered"
        id="instagram-embed-0"
        src="https://www.instagram.com/vuitseguros/embed/?cr=1&amp;v=13&amp;rd=https%3A%2F%2Fvuit.com.br&amp;rp=%2Fhome#%7B%22ci%22%3A0%2C%22os%22%3A3462.5999999940395%2C%22ls%22%3A553.4000000059605%2C%22le%22%3A3444.7999999970198%7D"
        allowtransparency="true"
        allowfullscreen="true"
        frameborder="0"
        height="540"
      ></iframe>
      <div>
        <WhatsappGreenButton></WhatsappGreenButton>
        <TelephoneButton></TelephoneButton>
      </div>
    </ContainerSection>
  );
}

export default QuinarySection;
