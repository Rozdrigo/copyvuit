import WhatsappButton from "../../WhatsappButton/index";
import { ContainerSection, TextLeft } from "./styles";
import api from "../../../services/api";
import { useState, useEffect } from "react";

function QuarternarySection() {
  const [renderElements, setRenderElements] = useState();

  async function request() {
    try {
      const { data } = await api.post("/articles/getArticleBySection", {
        page: "Cred",
        section: "quarternary",
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
      <div>
        <WhatsappButton></WhatsappButton>
      </div>
      <br></br>
      <br></br>
      {renderElements}
      <br></br>
      <br></br>
      <div>
        <WhatsappButton></WhatsappButton>
      </div>
    </ContainerSection>
  );
}

export default QuarternarySection;
