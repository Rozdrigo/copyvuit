import { useRef } from "react";
import { MenuContainer, MenuButton } from "./styled";
import { Link } from "react-router-dom";

function Menu() {
  const ButtonRef = useRef();

  function handleClick() {
    const elem = ButtonRef.current;
    if (elem.classList.contains("opened-container")) {
      elem.classList.add("closed-container");
      elem.classList.remove("opened-container");
    } else {
      elem.classList.remove("closed-container");
      elem.classList.add("opened-container");
    }
  }

  return (
    <MenuContainer>
      <div ref={ButtonRef} className="closed-container">
        <div className="to-arrow" onClick={handleClick}>
          <div></div>
        </div>
        <Link to="/Cred">
          <MenuButton>VUIT CRED</MenuButton>
        </Link>
        <Link to="/">
          <MenuButton>VUIT SEGUROS</MenuButton>
        </Link>
      </div>
    </MenuContainer>
  );
}

export default Menu;
