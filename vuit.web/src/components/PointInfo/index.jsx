import { useRef } from "react";
import { Container } from "./styles";
import { FaPlus } from "react-icons/fa";

const PointInfo = function (props) {
  const boxRef = useRef();

  function handleClick() {
    const elem = boxRef.current;
    if (elem.classList.contains("opened-container")){
      elem.classList.add("closed-container");
      elem.classList.remove("opened-container");
    }
    else {
      elem.classList.remove("closed-container");
      elem.classList.add("opened-container");
    }
  }

  return (
    <Container ref={boxRef} className="closed-container">
      <div onClick={handleClick}>
        <div>{props.title}</div>
        <span><FaPlus></FaPlus></span>
      </div>
      <div>{props.body}</div>
    </Container>
  );
};

export default PointInfo;
