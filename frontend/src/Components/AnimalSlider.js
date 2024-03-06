import React from 'react';
import { Carousel } from 'react-bootstrap';

const AnimalSlider = () => {
  // Define the caption content and styles for the title
  const title = {
    content: "Big Cat Rescue",
    style: {
      fontSize: '60px',
      fontFamily: 'Copperplate, serif',
      bottomMargin: '0px',
      lineHeight: '.6' // Included lineHeight in order to get title closer to welcomeMessage
    }
  };

  // Define the caption content and styles for the welcome message
  const welcomeMessage = {
    content: "Welcome",
    style: {
      fontSize: '40px',
      fontFamily: 'Copperplate, serif',
      marginTop: '0px'
    }
  };

  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://images5.alphacoders.com/337/337331.jpg"
          alt="First slide"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption className="text-center" style={{ bottom: '10px', left: '0', right: '0', margin: 'auto' }}>
          <h3 style={title.style}>{title.content}</h3>
          <h1 style={welcomeMessage.style}>{welcomeMessage.content}</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images7.alphacoders.com/287/287970.jpg"
          alt="Second slide"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption className="text-center" style={{ bottom: '10px', left: '0', right: '0', margin: 'auto' }}>
          <h3 style={title.style}>{title.content}</h3>
          <h1 style={welcomeMessage.style}>{welcomeMessage.content}</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/ea/2d/49/ea2d49c5b5029b7789396304d6a9b4f0.jpg"
          alt="Third slide"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption className="text-center" style={{ bottom: '10px', left: '0', right: '0', margin: 'auto' }}>
          <h3 style={title.style}>{title.content}</h3>
          <h1 style={welcomeMessage.style}>{welcomeMessage.content}</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default AnimalSlider;