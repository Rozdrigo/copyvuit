import React, { useState, useEffect } from "react";
import { HeaderFor, TextLeft, RoundedBorder } from "./styles";
import api from "../../../services/api";

function PrimarySection() {
  const [renderElements, setRenderElements] = useState();

  async function request() {
    try {
      const { data } = await api.post("/articles/getArticleBySection", {
        page: "Cred",
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
      <RoundedBorder>
        <div class="embed-responsive embed-responsive-16by9 link-iframe-round">
          <iframe
            class="embed-responsive-item"
            frameborder="no"
            src="https://www.youtube-nocookie.com/embed/kdPSpUR9BLY"
          ></iframe>
        </div>
      </RoundedBorder>
      {renderElements}
    </section>
  );
}

export default PrimarySection;
