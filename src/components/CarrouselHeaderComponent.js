import Carousel from 'react-bootstrap/Carousel'
import carousel_img_1 from '../img/carousel_1.jpg';
import carousel_img_2 from '../img/carousel_2.jpg';
import carousel_img_3 from '../img/carousel_3.jpg';
const carousel_1 = {
  backgroundImage: 'url('+ carousel_img_1 +')'
};
const carousel_2 = {
  backgroundImage: 'url('+ carousel_img_2 +')'
};
const carousel_3 = {
  backgroundImage: 'url('+ carousel_img_3 +')'
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
