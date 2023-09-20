import { ContainerSection, TextLeft, TextLeftGold } from "./styles";

import BannerImage from "./assets/bannerservicos.png";
import WhatsappButton from "../../WhatsappButton";
import { useEffect, useState } from "react";
import api from "../../../services/api";

function SecundarySection() {
  const [renderElements, setRenderElements] = useState();

  async function request() {
    try {
      const { data } = await api.post("/articles/getArticleBySection", {
        page: "Beneficios",
        section: "quinary",
      });
      const bodyRender = data.map((elem, index) => {
        const text = elem.body.split("\n").map((paragraph) => {
          return (
            <>
              {paragraph}
              <br></br>
            </>
          );
        });
        if (elem.highlighted) {
          return <TextLeftGold>{text}</TextLeftGold>;
        }
        return <TextLeft>{text}</TextLeft>;
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
      {renderElements}
      <WhatsappButton></WhatsappButton>
    </ContainerSection>
  );
}

export default SecundarySection;
