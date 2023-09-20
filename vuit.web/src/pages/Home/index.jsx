import Menu from "../../components/HomeComponents/Menu/index";
import Header from "../../components/HomeComponents/Header";
import Divider from "../../components/Divider";
import PrimarySection from "../../components/HomeComponents/PrimarySection";
import SecundarySection from "../../components/HomeComponents/SecundarySection";
import TertiarySection from "../../components/HomeComponents/TertiarySection";
import QuarternarySection from "../../components/HomeComponents/QuarternarySection";
import QuinarySection from "../../components/HomeComponents/QuinarySection";
import SenarySection from "../../components/HomeComponents/SenarySection";

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
