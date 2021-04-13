import Carousel from 'react-bootstrap/Carousel'


function CarrouselHeaderComponent() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          height={600}
          className="d-block w-100"
          src='/assets/img/carousel_1.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={600}
          className="d-block w-100"
          src="/assets/img/carousel_2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={600}
          className="d-block w-100"
          src="/assets/img/carousel_5.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselHeaderComponent;
