
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function FormComponent() {
  return (
    <div className='Formdiv'>
        <h1 className='display-4 text-center'>Contact</h1>
        <Card className='FormCore'>
            <Card.Body>
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
