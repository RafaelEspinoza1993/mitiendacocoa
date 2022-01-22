const shape = {
  backgroundColor: '#59261B',
  position: 'absolute',
}
import shape_img from '../img/shape.png';

function ShapeComponent() {
  return (
    <img
      className="d-block"
      style={shape}
      fluid
      src={shape_img}
    />
  );
}

export default ShapeComponent;
