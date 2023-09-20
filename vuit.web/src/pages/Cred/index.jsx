import Menu from "../../components/CredComponents/Menu/index";
import Header from "../../components/CredComponents/Header";
import Divider from "../../components/Divider";
import PrimarySection from "../../components/CredComponents/PrimarySection";
import SecundarySection from "../../components/CredComponents/SecundarySection";
import TertiarySection from "../../components/CredComponents/TertiarySection";
import QuarternarySection from "../../components/CredComponents/QuarternarySection";
import QuinarySection from "../../components/CredComponents/QuinarySection";
import SenarySection from "../../components/CredComponents/SenarySection";

import { Body } from "./styles";

function Home() {
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
          </div>
        </div>
      </div>
    </Body>
  );
}

export default Home;
