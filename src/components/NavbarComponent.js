import Nav from 'react-bootstrap/Nav'

function NavbarComponent() {
  return (
    <div className='NavbarCore'>
      <img
        height={150}
        className="d-block"
        src='/assets/img/logo.jpg'
        alt="First slide"
      />
      <Nav defaultActiveKey="/home" as="ul" className='NavbarNucleos'>        
          <Nav.Item as="li">
              <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
              <Nav.Link eventKey="link-1">About</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Contact</Nav.Link>
          </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavbarComponent;
