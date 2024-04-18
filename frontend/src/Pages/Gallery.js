import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Gallery = () => {
  const [animals, setAnimals] = useState([]);
  const navigate = useNavigate(); // Get history object for navigation

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/animals');
        setAnimals(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Use navigate form react-router-dom to go to new page without full page reload with animal object
  const handleDonateClick = (animal) => {
    navigate(`/donationForm?animal=${encodeURIComponent(JSON.stringify(animal))}`); // Navigate to donate page with animal data as query parameter
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4" style={{ fontSize: '3rem' }}>Animal Gallery</h1>
      {animals.length > 0 ? (
        <Row>
          {animals.map((animal) => (
            <Col key={animal.ID} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '30px' }}>
              <Card style={{ height: '100%', position: 'relative', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.8)' }}>
                {animal.Image && (
                  <Card.Img
                    variant="top"
                    src={animal.Image}
                    alt={animal.Name}
                    style={{ height: '200px', objectFit: 'cover'}} // Adjust dimensions as needed
                  />
                )}
                <Card.Body style={{ height: '260px', marginBottom: '0' }}>
                  <Card.Title style={{ marginBottom: '3%' }}>{animal.Name}</Card.Title>
                  <Card.Text style={{ minHeight: '100px' }}>
                  <div style={{ marginTop: '0', marginBottom: '0', lineHeight: '1.2'}}>Species: {animal.Species}</div>
                  <div style={{ marginTop: '0', marginBottom: '5%', lineHeight: '1.2'}}>Sex: {animal.Sex}</div>
                  <div style={{ lineHeight: '1.2' }}>{animal.Description}</div>
                  </Card.Text>
                  {/* Pass animal data to handleDonateClick */}
                  <button className="btn btn-primary" style={{ position: 'absolute', bottom: '15px' }} onClick={() => handleDonateClick(animal)}>Donate</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No animals found!</p>
      )}
    </div>
  );
};

export default Gallery;
