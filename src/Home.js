import NavbarComponent from './components/NavbarComponent'
import CarrouselHeaderComponent from './components/CarrouselHeaderComponent'
import About from './components/AboutComponent'
import FormComponent from './components/FormComponent'
import ShapeComponent from './components/ShapeComponent'
import FooterComponents from './components/FooterComponent'
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Home() {
  return (
    <div className='Home'>
      <Container className='NavbarContainer'>
        <NavbarComponent />
      </Container>
      <CarrouselHeaderComponent />
      <ShapeComponent />
      <Container className='Content'>
        <About />
      </Container>
      <Container >
        <Row>
          <Col><FormComponent /></Col>
        </Row>
      </Container>
      <FooterComponents />
    </div>    
  );
}

export default Home;
