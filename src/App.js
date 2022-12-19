import "./App.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import MaskedFormControl from "react-bootstrap-maskedinput";
import axios from "axios";
import Swal from "sweetalert2";

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    const { nickname, birthday } = e.target.elements;

    var obj = {};
    obj["nickname"] = nickname.value;
    obj["birthday"] = birthday.value;

    console.log(obj);

    axios.post("", obj).then((data) => {
      if (data.status == 200) {
        Swal.fire("Cadastro enviado com sucesso!");
      }
    });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="form-style">
        <Row className="row-style">
          <Form.Group as={Col} controlId="formGridNickname">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              id="nickname"
              name="Name"
              placeholder="Nome"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridBirthday">
            <Form.Label>Data de Nascimento</Form.Label>
            <MaskedFormControl
              type="text"
              id="birthday"
              name="birthday"
              mask="11/11/1111"
            />
          </Form.Group>
        </Row>

        <Button
          type="submit"
          style={{
            margin: "12px 12rem",
            padding: "10px",
            color: "#fff",
            width: "12rem",
            backgroundColor: "#1A1A1A",
            boxShadow: "rgba(0, 0, 0, 0.25) 0 8px 15px",
          }}
        >
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default App;
