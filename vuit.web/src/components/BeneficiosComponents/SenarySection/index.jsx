import WhatsappGreenButton from "../../WhatsappGreenButton";
import TelephoneButton from "../../TelephoneButton";
import { ContainerSection, TextLeft } from "./styles";

function QuinarySection() {
  return (
    <ContainerSection>
      <h4>CONTATO</h4>
      <iframe
        class="instagram-media instagram-media-rendered"
        id="instagram-embed-0"
        src="https://www.instagram.com/vuitbeneficios/embed/?cr=1&amp;v=13&amp;rd=https%3A%2F%2Fvuit.com.br&amp;rp=%2Fbeneficios#%7B%22ci%22%3A0%2C%22os%22%3A835.1000000014901%2C%22ls%22%3A318.8999999985099%2C%22le%22%3A318.8999999985099%7D"
        allowtransparency="true"
        allowfullscreen="true"
        frameborder="0"
        data-instgrm-payload-id="instagram-media-payload-0"
        scrolling="no"
      ></iframe>
      <div>
        <WhatsappGreenButton></WhatsappGreenButton>
        <TelephoneButton></TelephoneButton>
      </div>
    </ContainerSection>
  );
}

export default QuinarySection;
