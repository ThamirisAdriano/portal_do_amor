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
import { FormLabel } from "react-bootstrap";



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

    function handleClick() {
    var valor = document.getElementById("nickname").value;
    if (valor == "") {
        alert("Por favor, preencha o campo");
    }
}

  return (
    
    <Container>
     
      <Form onSubmit={handleSubmit} className="form-style" >
        <Row className="row-style">
          <Form.Group as={Col} controlId="formGridNickname" className="form_group_style">
            <Form.Label className="form_label_style">Nome</Form.Label>
            <Form.Control
              required
              type="text"
              id="nickname"
              name="Name"
              placeholder="Nome"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridBirthday" className="form_group_style">
            <Form.Label className="form_label_style">Data de Nascimento</Form.Label>
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
          onClick={handleClick}
          style={{
            cursor: 'pointer',
            outline: 'none',
            marginTop: '60px',
            fontSize: '18px',
            backgroundColor: '#23D3D3',
            textTransform: 'uppercase',
            fontWeight: '700',
            border:'1px solid',
            borderRadius: '8px',
            padding: '16px 32px',
          }}
        >
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
