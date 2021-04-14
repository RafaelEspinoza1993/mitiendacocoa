import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavbarComponent() {
  return (
      <Navbar defaultActiveKey="/home" fixed="top" variant="light" bg="light" className='NavbarCore'>
        <Navbar.Brand href="#home">
          <img
            height={50}
            className="d-block"
            src='/assets/img/logo.png'
            alt="First slide"
          />
        </Navbar.Brand>     
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
  );
}

export default NavbarComponent;
