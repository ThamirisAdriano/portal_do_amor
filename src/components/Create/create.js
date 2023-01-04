import "./create.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import MaskedFormControl from "react-bootstrap-maskedinput";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";



export default function Create() {
  const { register } = useForm();
  
  function handleSubmit(e) {
    e.preventDefault();
    const { nickname, birthday } = e.target.elements;
    

    const obj = {};
    obj["nickname"] = nickname.value;
    obj["birthday"] = birthday.value;

    console.log(obj);

    axios.post("https://apibirthday.onrender.com/user", obj).then((data) => {
      
      if (data.status == 200) {
        Swal.fire("Cadastro enviado com sucesso!");
      }
    });
  }

  return (
    
    <Container>
      <div className="title-style">
     
      </div>

      <Form onSubmit={handleSubmit} className="form-style">
        <Row className="row-style">
          <Form.Group as={Col} controlId="formGridNickname">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              required 
              id="nickname"
              name="Name"
              placeholder="Nome"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridBirthday">
            <Form.Label>Data de Nascimento</Form.Label>
            <MaskedFormControl
              type="text"
              required
              id="birthday"
              name="birthday"
              mask="11/11/1111"
            />
          </Form.Group>
        </Row>

        <Button
          type="submit"
          style={{
            cursor: 'pointer',
            outline: 'none',
            marginTop: '60px',
            fontSize: '18px',
            backgroundColor: '#23D3D3',
            textTransform: 'uppercase',
            fontWeight: '700',
            border:'1px solid',
            borderRadius: '100px',
            padding: '18px 60px'
          }}
        >
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
