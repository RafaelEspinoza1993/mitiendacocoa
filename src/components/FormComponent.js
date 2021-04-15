
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const paralax = {backgroundImage: 'url("/assets/img/Contact.jpg")'}

function FormComponent() {
  return (
    <div className='Formdiv parallax' style={paralax} id='Contact'>
        <Card className='FormCore'>
            <Card.Body>
                <Card.Title className='display-4 text-center h1title'>Contact</Card.Title>
                <div className='FormNucleo'>
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                Email
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control defaultValue="email@example.com" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="4">
                            Password
                            </Form.Label>
                            <Col sm="8">
                            <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintexttextarea">
                            <Form.Label column sm="4">Example textarea</Form.Label>
                            <Col sm="8">
                                <Form.Control as="textarea" rows={3} />
                            </Col>
                        </Form.Group>
                    </Form>
                    <img
                        height={250}
                        className="d-block"
                        src='/assets/img/logo.png'
                    />
                </div>
            </Card.Body>
        </Card>
    </div>
  );
}

export default FormComponent;
