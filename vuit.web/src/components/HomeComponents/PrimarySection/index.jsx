import React, { useEffect, useState } from "react";
import Logo from "./assets/vuitbackgroundlogo.png";
import { FaAccusoft } from "react-icons/fa";
import {
  HeaderFor,
  Subtitle,
  TextLeft,
  RoundedBorder,
  PDFButton,
} from "./styles";
import api from "../../../services/api";

function PrimarySection() {
  const [renderElements, setRenderElements] = useState();

  async function request() {
    try {
      const { data } = await api.post("/articles/getArticleBySection", {
        page: "Home",
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
      <RoundedBorder>
        <div class="embed-responsive embed-responsive-16by9 link-iframe-round">
          <iframe
            class="embed-responsive-item"
            frameborder="no"
            src="https://www.youtube-nocookie.com/embed/44gxvIpnsM8"
          ></iframe>
        </div>
      </RoundedBorder>
      {renderElements}
      <PDFButton>
        <div>
          <img src={Logo}></img>
        </div>
        <div>
          <FaAccusoft fontSize="x-large"></FaAccusoft>Baixe PDF apresentação
          Tudo na Vuit!
        </div>
      </PDFButton>
    </section>
  );
}

export default PrimarySection;
