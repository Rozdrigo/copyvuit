import { ContainerSection, TextLeft, TextLeftGold } from "./styles";
import { useEffect, useState } from "react";
import BannerImage from "./assets/bannervuit.png";
import WhatsappButton from "../../WhatsappButton";
import api from "../../../services/api";

function SecundarySection() {
  const [renderElements, setRenderElements] = useState();

  async function request() {
    try {
      const { data } = await api.post("/articles/getArticleBySection", {
        page: "Cred",
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
