import NavbarComponent from './components/NavbarComponent'
import CarrouselHeaderComponent from './components/CarrouselHeaderComponent'
import About from './components/AboutComponent'
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Home() {
  return (
    <div className='Home'>
      <NavbarComponent />
      <CarrouselHeaderComponent />
      <Container>
        <Row>
          <Col><About/></Col>
        </Row>
      </Container>
    </div>    
  );
}

export default Home;
