import { useEffect, useState } from "react";
import { ContainerSection, Gap } from "./styles";

import PointInfo from "../../PointInfo/index";
import BannerImage from "./assets/bannerseguro.png";
import WhatsappButton from "../../WhatsappButton";

import api from "../../../services/api";

function SecundarySection() {
  const [renderElements, setRenderElements] = useState();

  async function request() {
    try {
      const { data } = await api.get("/infoPoints/getAll");
      const bodyRender = data.map((elem, index) => {
        return (
          <PointInfo
            body={elem.body}
            title={elem.title}
            key={"PI" + btoa(index)}
          ></PointInfo>
        );
      });
      setRenderElements(bodyRender);
    } catch (ex) {
      window.alert(ex.message);
    }
  }

  useEffect(() => {
    request();
  }, []);

  return (
    <ContainerSection>
      <img src={BannerImage}></img>
      <Gap>{renderElements}</Gap>
      <br></br>
      <WhatsappButton></WhatsappButton>
    </ContainerSection>
  );
}

export default SecundarySection;
