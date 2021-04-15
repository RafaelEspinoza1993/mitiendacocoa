import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar'

function FooterComponents() {
  return (
        <div className='FooterCore'>
            <Card className='cardeditedfooter'>
                <Card.Body className='redsocialcore'>
                    <div className='redsocialdiv'>
                        <a href="https://www.instagram.com/mitiendacocoa7" className='redsocialdiv'>
                            <img
                                alt=""
                                src='/assets/img/instagram.png'
                                width={40}
                                height={40}
                                className="d-inline-block align-top"
                            />
                            <span>https://www.instagram.com/mitiendacocoa7</span>
                        </a>
                        <a href="https://wa.me/584165201170" className='redsocialdiv'>
                            <img
                                alt=""
                                src='/assets/img/whatsapp.png'
                                width={40}
                                height={40}
                                className="d-inline-block align-top"
                            />
                            <span>https://wa.me/584165201170</span>
                        </a>
                    </div>
                </Card.Body>
            </Card>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                </Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default FooterComponents;
