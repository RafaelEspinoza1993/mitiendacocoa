import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar'

function FooterComponents() {
  return (
        <div className='FooterCore'>
            <Card className='cardeditedfooter'>
                <Card.Body className='redsocialcore'>
                    <div className='redsocialdiv'>
                        <img
                            alt=""
                            src='/assets/img/facebook.png'
                            width={40}
                            height={40}
                            className="d-inline-block align-top"
                        />
                        <img
                            alt=""
                            src='/assets/img/instagram.png'
                            width={40}
                            height={40}
                            className="d-inline-block align-top"
                        />
                        <img
                            alt=""
                            src='/assets/img/whatsapp.png'
                            width={40}
                            height={40}
                            className="d-inline-block align-top"
                        />
                    </div>
                    <div className='redsocialdiv'>
                        <p>
                            tlf:
                        </p>
                        <p>
                            Email:
                        </p>
                        <p>
                            Politica:
                        </p>
                    </div>
                </Card.Body>
            </Card>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src='/assets/img/logo.png'
                        width={80}
                        height={80}
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default FooterComponents;
