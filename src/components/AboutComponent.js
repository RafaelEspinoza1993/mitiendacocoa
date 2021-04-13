import Card from 'react-bootstrap/Card'

function About() {
  return (
    <div className='AboutCore'>
      <h1 className='display-4 text-center'>About us</h1>
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
        <div className='AboutSecondNucleo'>
          <img
            height={450}
            className="d-block"
            src='/assets/img/AboutDescription.jpg'
            alt="About Description"
          />
          <div className='AboutTexts'>
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
        </div>
        <div className='AboutTercerNucleo'>
          <img
            height={250}
            width={250}
            className="d-block"
            src='/assets/img/producto_1.jpg'
            alt="About Description"
          />
          <img
            height={250}
            width={250}
            className="d-block"
            src='/assets/img/producto_2.jpg'
            alt="About Description"
          />
          <img
            height={250}
            width={250}
            className="d-block"
            src='/assets/img/producto_3.jpg'
            alt="About Description"
          />
        </div>
    </div>
  );
}

export default About;
