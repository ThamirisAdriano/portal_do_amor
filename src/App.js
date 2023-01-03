import "./App.css";
import Create from "./components/Create/create";
import Header from "./components/Header/header";
import Container from "react-bootstrap/Container";
import Home from "./components/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container_principal">
    <body style={{
      backgroundImage: `url(https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top',
      backgroundSize:'cover',
      
      width: '100vw',
      height: '100vh'
    }}>
    
    <Container>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
      
    </Container>
    </body>
    </div>
  );
}

export default App;
