import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// only the frontend, will have to get the user's name, email, and total donation amount
// from the backend once user is logged in
function Profile() {
   return(
    <div className="d-flex justify-content-center" style={{marginTop: '20px'}}>
    <Card style={{width: '18rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" />
      <Card.Body className="text-center">
        <Card.Title>Name</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Email: </ListGroup.Item>
        <ListGroup.Item>Total Donation Amount: $</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
   )
}

export default Profile;