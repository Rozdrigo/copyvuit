import BannerImage from "./assets/bannerbeneficios.png";
import WhatsappButton from "../../WhatsappButton";
import { ContainerSection, TextLeft } from "./styles";
import { useEffect, useState } from "react";
import api from "../../../services/api";

function TertiarySection() {
  const [renderElements, setRenderElements] = useState();

  async function request() {
    try {
      const { data } = await api.post("/articles/getArticleBySection", {
        page: "Home",
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
      <img src={BannerImage} />
      {renderElements}
      <div>
        <WhatsappButton></WhatsappButton>
      </div>
    </ContainerSection>
  );
}

export default TertiarySection;
