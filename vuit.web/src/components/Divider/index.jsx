import { FaAngleDown } from "react-icons/fa";
import { Container } from "./styles";

function Divider(){
  return(
    <Container>
      <div></div>
      <FaAngleDown size={20} color="#FFF"/>
      <div></div>
    </Container>
  )

}

export default Divider;