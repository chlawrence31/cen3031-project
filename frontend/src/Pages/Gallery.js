import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'; // Assuming you've included Axios

const Gallery = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/animals'); // Replace with your actual API endpoint
        setAnimals(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Animal Gallery</h1>
      {animals.length > 0 ? (
        <Row>
          {animals.map((animal) => (
            <Col key={animal.ID} xs={12} sm={6} md={4} lg={3}>
              <Card style={{ height: '100%' }}>
                {animal.Image && (
                  <Card.Img
                    variant="top"
                    src={animal.Image}
                    alt={animal.Name}
                    style={{ height: '200px', objectFit: 'cover' }} // Adjust dimensions as needed
                  />
                )}
                <Card.Body style={{ height: '200px' }}>
                  <Card.Title style={{ minHeight: '50px' }}>{animal.Name}</Card.Title>
                  <Card.Text style={{ minHeight: '100px' }}>
                    <p>Species: {animal.Species}</p>
                    <p>Sex: {animal.Sex}</p>
                    <p>{animal.Description}</p>
                  </Card.Text>
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
