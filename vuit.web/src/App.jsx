import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Cred from "./pages/Cred/index"
import Beneficios from "./pages/Beneficios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cred" element={<Cred />}></Route>
        <Route path="/beneficios" element={<Beneficios />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
