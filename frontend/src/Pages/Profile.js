import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'

function Profile() {
  // State variables to store user data
  const [email, setEmail] = useState('');
  const [donationAmount, setDonationAmount] = useState(0);
  const [username, setUsername] = useState('');
  const [totalDonationAmount, setTotalDonationAmount] = useState(0);

  // useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8000/loginCheck')
      .then(response => {
        // Check if the response is successful and the data is valid
        if (response.data.valid) {
          // Update state variables with user data
          setUsername(response.data.username);
          setEmail(response.data.email);
          setDonationAmount(response.data.donationAmount);
        } else {
          // Handle invalid response or user data
          console.error('Invalid response or user data');
        }
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching user data:', error);
      });
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts 
  useEffect(() => {
    axios.get('http://localhost:8000/totalDonations')
      .then(response => {
        console.log(response.data)
        setTotalDonationAmount(response.data.totalDonation); // Accessing the total donation amount from the response
      })
      .catch(error => {
        console.error('Error fetching total donation amount:', error);
        // Handle error if needed
      });
  }, []); // Empty dependency array to run this effect only once after the component mounts
  return(
    <div className="d-flex justify-content-center" style={{marginTop: '20px'}}>
    <Card style={{width: '18rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" />
      <Card.Body className="text-center">
        <Card.Title>Name: {username}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Email: {email}</ListGroup.Item>
        {username === "admin" ? 
        (
        <ListGroup.Item>Total Donation Amount: ${totalDonationAmount}</ListGroup.Item>
        ) : (
        <ListGroup.Item>Your Donation Amount: ${donationAmount}</ListGroup.Item>
        )}
      </ListGroup>
    </Card>
    </div>
   )
}

export default Profile;