import WhatsappGreenButton from "../../WhatsappGreenButton";
import TelephoneButton from "../../TelephoneButton";
import { ContainerSection, TextLeft } from "./styles";

function QuinarySection() {
  return (
    <ContainerSection>
      <h4>FALE CONOSCO:</h4>
      <h5>VAMOS CONVERSAR?</h5>
      <TextLeft>
        Venha fazer parte deste ecossistema que tem mudado a vida das pessoas.<br></br>
        Será um prazer tê-los conosco.
      </TextLeft>
      <br></br>
      <br></br>
      <iframe
        scrolling="no"
        className="instagram-media instagram-media-rendered"
        id="instagram-embed-0"
        src="https://www.instagram.com/vuitcred/embed/?cr=1&v=13&rd=https%3A%2F%2Fvuit.com.br&rp=%2Fcred#%7B%22ci%22%3A0%2C%22os%22%3A719.6999999997206%2C%22ls%22%3A414.09999999962747%2C%22le%22%3A414.09999999962747%7D"
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
