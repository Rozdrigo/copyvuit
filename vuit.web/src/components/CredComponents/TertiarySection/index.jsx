import { ContainerSection, TextLeft, TextLeftGold } from "./styles";

import BannerImage from "./assets/bannernacional.png";
import SecondBannerImage from "./assets/bannercomercial.png";
import api from "../../../services/api";
import { useState, useEffect } from "react";

function SecundarySection() {
  const [renderElements, setRenderElements] = useState();

  async function request() {
    try {
      const { data } = await api.post("/articles/getArticleBySection", {
        page: "Cred",
        section: "tertiary",
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
      <img src={SecondBannerImage}></img>
    </ContainerSection>
  );
}

export default SecundarySection;
