import './App.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import MaskedFormControl from 'react-bootstrap-maskedinput'
import axios from 'axios';



function App() {

  function handleSubmit(e) {
    e.preventDefault()
    const { nickname, birthday } = e.target.elements

    var obj = {};
    obj['nickname'] = nickname.value;
    obj['birthday'] = birthday.value;

    console.log(obj);

    axios.post('', obj)
      .then((data) => {
        if (data.status == 200) {
          alert('Cadastro enviado com sucesso!')
        }
      });
  }

  return (
    <Container >
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNickname">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" id="nickname" name="Name" placeholder="Nome" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridBirthday">
            <Form.Label>Data de Nascimento</Form.Label>
            <MaskedFormControl type='text' id="birthday" name='birthday' mask='11/11/1111' />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default App;
