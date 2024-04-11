import React, { useState } from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

function Donate() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const animal = JSON.parse(queryParams.get('animal'));

  
  let donateText = "Donate to Big Cat Rescue"; // Default text
  
  if (animal) {
    donateText = `Donate to ${animal.Name} the ${animal.Species}`;
  }

  const [donationAmount, setDonationAmount] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send donation amount and animal ID to backend
      const response = await axios.post('http://localhost:8000/donationUpdate', {
        animalId: animal.Id,
        amount: donationAmount,
      });
      console.log('Donation successful:', response.data);
      navigate('/donationconfirmation');
    } catch (error) {
      console.error('Error donating:', error);
      // Handle error
    }
  };

  return (
    <Container className="mt-5">
     
      <Row>
        <Col md={8}>
          <h1 className="text-center" style={{marginBottom: '5%'}}>{donateText}</h1>
          <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
            <label htmlFor="inputFirstName" className="sr-only">Your information</label>
            <div className="form-group">
              <input type="name" id="firstName" className="form-control mb-3" 
              placeholder="First name" required autoFocus />
            </div>
            <div className="form-group">
              <input type="name" id="lastNameName" className="form-control mb-3" 
              placeholder="Last name" required />
            </div>
            <div className="form-group">
              <input type="email" id="emailAddress" className="form-control mb-3" 
              placeholder="Email Address" />
            </div>
            <div className="form-group">
              <input type="number" id="donationAmount" className="form-control mb-3" min="0" required 
              placeholder="Donation amount" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="inputCreditCardNumber" className="sr-only">Payment Information</label>
              <input type="text" id="creditCardNumber" className="form-control mb-3"
              placeholder="Credit card number" required />
            </div>
            <div className="form-group">
              <div style={{ display: "flex" }}>
                <input type="text" id="expirationDate" className="form-control mr-3"
                placeholder="Expiration" required />
                <input type="text" id="CVC" className="form-control"
                placeholder="CVC" required />
              </div>
            </div>
            <div className="text-center mt-3">
              <button className="btn btn-lg btn-primary btn-block" type="submit">Donate</button>
            </div>
          </form>
        </Col>
        <Col md={4}>
          {animal && (
            <Card style={{ width: '18rem', height: '24rem', marginTop: '23%', boxShadow: '0px 0px 25px 2px rgba(0, 0, 0, 0.8)' }}>
              <Card.Img variant="top" src={animal.Image} alt={animal.Name} style={{ height: '10rem', objectFit: 'cover' }}/>
              <Card.Body>
                <Card.Title >{animal.Name}</Card.Title>
                <Card.Text>
                  <div style={{ marginTop: '0', marginBottom: '0', lineHeight: '1'}}>Species: {animal.Species}</div>
                  <div style={{ marginTop: '0', marginBottom: '5%', lineHeight: '1'}}>Sex: {animal.Sex}</div>
                  <div style={{ lineHeight: '1.2' }}>{animal.Description}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Donate;
