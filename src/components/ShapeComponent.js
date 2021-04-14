const shape = {
  backgroundColor: '#59261B',
  position: 'absolute',
}

function ShapeComponent() {
  return (
    <img
      className="d-block"
      style={shape}
      fluid
      src='/assets/img/shape.png'
    />
  );
}

export default ShapeComponent;
