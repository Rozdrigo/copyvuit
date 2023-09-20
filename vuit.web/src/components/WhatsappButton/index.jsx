import { FaWhatsapp } from "react-icons/fa";
import { ContainerButton } from "./styles";

function WhatsappButton() {
  return (
    <ContainerButton>
      <FaWhatsapp color="#FFF"></FaWhatsapp>
      <div>Solicite uma proposta Vuit Seguros</div>
    </ContainerButton>
  );
}

export default WhatsappButton;
