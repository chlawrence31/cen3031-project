import React from 'react';
import { Carousel } from 'react-bootstrap';

const AnimalSlider = () => {
  // Define the interval time in milliseconds
  const intervalTime = 4000; // 4 seconds

  // Define the caption content and styles for the title
  const title = {
    content: "Big Cat Rescue",
    style: {
      fontSize: '60px',
      fontFamily: 'Copperplate, serif',
      marginBottom: '0px',
      lineHeight: '1',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
    }
  };

  // Define the caption content and styles for the welcome message
  const welcomeMessage = {
    content: "Welcome",
    style: {
      fontSize: '40px',
      fontFamily: 'Copperplate, serif',
      marginTop: '0px',
      marginBottom: '120px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
    }
  };

  return (
    <Carousel fade>
      <Carousel.Item interval={intervalTime} pause={false}>
        <img
          className="d-block w-100"
          src="https://www.thewildlifediaries.com/wp-content/uploads/2019/05/lion-3049884_1280.jpg"
          alt="Second slide"
          // removed object fit bc looked better given the image
          style={{ maxHeight: '400px'}}
        />
        <Carousel.Caption className="text-center" style={{ bottom: '10px', left: '0', right: '0', margin: 'auto' }}>
          <h3 style={title.style}>{title.content}</h3>
          <h1 style={welcomeMessage.style}>{welcomeMessage.content}</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={intervalTime}>
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
      <Carousel.Item interval={intervalTime}>
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
    </Carousel>
  );
};

export default AnimalSlider;
