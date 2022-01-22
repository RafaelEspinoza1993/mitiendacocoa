import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import AboutDescription from '../img/AboutDescription.jpg';
import producto_1 from '../img/producto_1.jpg';
import producto_2 from '../img/producto_2.jpg';
import producto_3 from '../img/producto_3.jpg';
const heightproducts = 300
const paralax = {backgroundImage: 'url('+ AboutDescription +')'}
function About() {
  return (
    <div className='AboutCore' id='About'>
      <Container className='Content'>
        <Card>
          <Card.Title className='display-4 text-center h1title'>About</Card.Title>
          <Card.Body>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Card.Body>
        </Card>
      </Container>
        <div className='AboutSecondNucleo parallax' style={paralax}>
          <Container className='Content'>
            <div className='AboutTexts'>
              <Card>
                <Card.Title className='display-4 text-center h1title'>History</Card.Title>
                <Card.Body>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </div>
        <div className='AboutTercerNucleo'>
          <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" height={heightproducts} src={producto_1} />
            <Card.Body>
              <Card.Title className='titleborder text-center'>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <a href="https://wa.me/c/584165201170">
                <Button className='buttonedited'>Catálogo</Button>
              </a>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={heightproducts} src={producto_2} />
            <Card.Body>
              <Card.Title className='titleborder  text-center'>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <a href="https://wa.me/c/584165201170">
                <Button className='buttonedited'>Catálogo</Button>
              </a>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={heightproducts} src={producto_3} />
            <Card.Body>
              <Card.Title className='titleborder  text-center'>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <a href="https://wa.me/c/584165201170">
                <Button className='buttonedited'>Catálogo</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
    </div>
  );
}

export default About;
