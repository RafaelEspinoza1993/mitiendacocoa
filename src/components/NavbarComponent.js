import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavbarComponent() {
  return (
      <Navbar defaultActiveKey="/home" collapseOnSelect fixed="top" bg="light" expand="lg" className='NavbarCore bg-light justify-content-between'>
        <Navbar.Brand href="#home">
          <img
            height={50}
            className="d-block"
            src='/assets/img/logo.png'
            alt="First slide"
          />
        </Navbar.Brand>     
        <Nav className="mr-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
  );
}

export default NavbarComponent;
