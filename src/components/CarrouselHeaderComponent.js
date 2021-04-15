import Carousel from 'react-bootstrap/Carousel'

const carousel_1 = {
  backgroundImage: 'url("/assets/img/carousel_1.jpg")',
};
const carousel_2 = {
  backgroundImage: 'url("/assets/img/carousel_2.jpg")',
};
const carousel_3 = {
  backgroundImage: 'url("/assets/img/carousel_3.jpg")',
};
const heightImage = 850
function CarrouselHeaderComponent() {
  return (
    <Carousel fade id='Home'>
      <Carousel.Item>
        <div
          height={heightImage}
          className="d-block w-100 carousel_1"
          style={carousel_1}>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          height={heightImage}
          className="d-block w-100 carousel_2"
          style={carousel_2}>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          height={heightImage}
          className="d-block w-100 carousel_3"
          style={carousel_3}>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselHeaderComponent;
