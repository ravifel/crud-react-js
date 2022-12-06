import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Alunos from "./Alunos";
import Sobre from "./Sobre";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Menu() {
  return (
    <BrowserRouter>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} to="/">
            Página inicial
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/alunos">
            Cadastro de Alunos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/sobre">
            Sobre
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Exibir o componente da rota na tela */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/alunos" element={<Alunos />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Menu;
