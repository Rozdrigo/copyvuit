import { ContainerSection, TextLeft } from "./styles";

import BannerImage from "./assets/bannervuit.png";
import WhatsappButton from "../../WhatsappButton";
import api from "../../../services/api";
import { useEffect, useState } from "react";

function SecundarySection() {
  const [renderElements, setRenderElements] = useState();

  async function request() {
    try {
      const { data } = await api.post("/articles/getArticleBySection", {
        page: "Beneficios",
        section: "secundary",
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
          return <TextLeft>{text}</TextLeft>;
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
