import NavbarComponent from './components/NavbarComponent'
import CarrouselHeaderComponent from './components/CarrouselHeaderComponent'
import About from './components/AboutComponent'
import FormComponent from './components/FormComponent'
import FooterComponents from './components/FooterComponent'
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Home() {
  return (
    <div className='Home'>
      <Container>
        <Row>
          <Col>
            <NavbarComponent />
          </Col>
        </Row>
      </Container>
      <CarrouselHeaderComponent />
      <Container className='Content'>
        <Row>
          <Col><About /></Col>
          <Col><FormComponent /></Col>
        </Row>
      </Container>
      <FooterComponents />
    </div>    
  );
}

export default Home;
