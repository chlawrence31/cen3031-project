import React from 'react';
import { Carousel } from 'react-bootstrap';

const DonationBanner = () => {

    // Define the caption content and styles for the title
    const title = {
      content: "Donate",
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
      content: "Help Us Create a World Where All Wild Cats Live Free!",
      style: {
        fontSize: '40px',
        fontFamily: 'Copperplate, serif',
        marginTop: '0px',
        marginBottom: '120px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
      }
    };

    return (
        <Carousel prevIcon={null} nextIcon={null}>
            <Carousel.Item>
                <img className="d-block w-100"
                src="https://images.unsplash.com/photo-1541893321-dcc3e4dcb6dc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About Page Image"
                style={{ maxHeight: '600px', marginTop: '0px'}}/>
                <Carousel.Caption className="text-center" style={{ bottom: '10px', left: '0', right: '0', margin: 'auto' }}>
                    <h3 style={title.style}>{title.content}</h3>
                    <h1 style={welcomeMessage.style}>{welcomeMessage.content}</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

}

export default DonationBanner;