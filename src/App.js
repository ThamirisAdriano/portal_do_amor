import "./App.css";
import Create from "./components/Create/create";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Home from "./components/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Container>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
      
    </Container>
    </>
  );
}

export default App;
