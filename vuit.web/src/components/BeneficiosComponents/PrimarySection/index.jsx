import React, { useState, useEffect } from "react";
import { HeaderFor, Subtitle, TextLeft } from "./styles";
import api from "../../../services/api";

function PrimarySection() {
  const [renderElements, setRenderElements] = useState();

  async function request() {
    try {
      const { data } = await api.post("/articles/getArticleBySection", {
        page: "Beneficios",
        section: "primary",
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
    <section>
      <HeaderFor>O QUE É O GRUPO VUIT</HeaderFor>
      <Subtitle>O GRUPO VUIT</Subtitle>
      {renderElements}
    </section>
  );
}

export default PrimarySection;
