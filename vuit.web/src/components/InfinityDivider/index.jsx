import { FaInfinity } from "react-icons/fa";
import { Container } from "./styles";

function InfinityDivider(){
  return(
    <Container>
      <div></div>
      <FaInfinity size={20} color="#ffffff1f"/>
      <div></div>
    </Container>
  )

}

export default InfinityDivider;