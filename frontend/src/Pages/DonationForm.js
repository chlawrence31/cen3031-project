import React from 'react';
import { Link } from 'react-router-dom';

function Donate() {
  return (
      <div>
        <div className = 'mt-5'>
          <h1 className="text-center">Donate to Big Cat Rescue</h1>
          <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <label for="inputFirstName" class="sr-only">Your information</label>
          <div style={{ display: "flex"}}>
            <input type="name" id="firstName" className="form-control mb-3" 
            placeholder="First name" required autoFocus style={{ marginRight: "10px" }}/>
            <input type="name" id="lastNameName" className="form-control mb-3" 
            placeholder="Last name" required/>
          </div>
          <input type="email" id="emailAddress" class="form-control mb-3" 
          placeholder = "Email Address"></input>
          <input type="number" id="donationAmount" class="form-control mb-3" min="0" required 
          placeholder = "Donation amount"></input>
          <label for="inputCreditCardNumber" class="sr-only">Payment Information</label>
          <input type="text" id="creditCardNumber" class="form-control mb-3"
          placeholder = "Credit card number" required></input>
          <div className style={{ display: "flex"}}>
            <input type="text" id="expirationDate" class="form-control mb-3"
            placeholder = "Expiration" required autoFocus style={{ marginRight: "10px" }}/>
            <input type="text" id="CVC" class="form-control mb-3"
            placeholder = "CVC" required></input>
          </div>
          <div className ="text-center mt-3">
          <Link to="/donationconfirmation" className ="btn btn-lg btn-primary btn-block" type="submit" style={{ marginBottom: '100px'}}>Donate</Link>
        </div>
          </div>
      </div>
    </div>

    
  );
}

export default Donate;