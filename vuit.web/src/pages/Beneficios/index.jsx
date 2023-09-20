import Menu from "../../components/BeneficiosComponents/Menu/index";
import Header from "../../components/BeneficiosComponents/Header";
import Divider from "../../components/Divider";
import PrimarySection from "../../components/BeneficiosComponents/PrimarySection";
import SecundarySection from "../../components/BeneficiosComponents/SecundarySection";
import TertiarySection from "../../components/BeneficiosComponents/TertiarySection";
import QuarternarySection from "../../components/BeneficiosComponents/QuarternarySection";
import QuinarySection from "../../components/BeneficiosComponents/QuinarySection";
import SenarySection from "../../components/BeneficiosComponents/SenarySection";

import { Body } from "./styles";
import SeptenarySection from "../../components/BeneficiosComponents/SeptenarySection";

function Beneficios() {
  return (
    <Body>
      <Menu></Menu>
      <div className="container animate__animated animate__fadeIn">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-md-8 link-content">
            <Header></Header>
            <PrimarySection></PrimarySection>
            <Divider></Divider>
            <SecundarySection></SecundarySection>
            <Divider></Divider>
            <TertiarySection></TertiarySection>
            <Divider></Divider>
            <QuarternarySection></QuarternarySection>
            <Divider></Divider>
            <QuinarySection></QuinarySection>
            <Divider></Divider>
            <SenarySection></SenarySection>
            <Divider></Divider>
            <SeptenarySection></SeptenarySection>
          </div>
        </div>
      </div>
    </Body>
  );
}

export default Beneficios;
