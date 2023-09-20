import Logo from "../../../assets/vuitlogo.png";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Subtitle, IconsContainer } from "./styles";

function Header() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="col-12 my-2">
        <img src={Logo}></img>
      </div>
      <Subtitle>SUA EMPRESA MUITO MAIS SEGURA</Subtitle>
      <div>
        <div className="d-flex flex-wrap justify-content-center">
          <IconsContainer>
            <div className="my-2 mx-3">
              <a href="#">
                <FaEnvelope size={18} color="#FFF"></FaEnvelope>
              </a>
            </div>
            <div className="my-2 mx-3">
              <a href="#">
                <FaPhone size={18} color="#FFF"></FaPhone>
              </a>
            </div>
            <div className="my-2 mx-3">
              <a href="#">
                <FaFacebook size={18} color="#FFF"></FaFacebook>
              </a>
            </div>
            <div className="my-2 mx-3">
              <a href="#">
                <FaInstagram size={18} color="#FFF"></FaInstagram>
              </a>
            </div>
            <div className="my-2 mx-3">
              <a href="#">
                <FaYoutube size={18} color="#FFF"></FaYoutube>
              </a>
            </div>
            <div className="my-2 mx-3">
              <a href="#">
                <FaLinkedin size={18} color="#FFF"></FaLinkedin>
              </a>
            </div>
          </IconsContainer>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Header;
