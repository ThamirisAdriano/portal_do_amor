import "./App.css";
import Create from "./components/Create/create";
import Container from "react-bootstrap/Container";



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
    
      <Create></Create>
      
    </Container>
    </body>
    </div>
  );
}

export default App;
