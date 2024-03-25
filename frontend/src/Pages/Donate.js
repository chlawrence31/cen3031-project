import React from 'react';
import DonationBanner from '../Components/DonationBanner';

function Donate() {
  return (
      <div>
        <DonationBanner/>
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
          <button className ="btn btn-lg btn-primary btn-block" type="submit" style={{ marginBottom: '100px'}}>Donate</button>
        </div>
          </div>
      </div>

      <div>
        <p>Giving Makes a Difference! 🌈 Your contribution not only aids in the day-to-day care of our resident cats but also fuels ongoing campaigns to end private ownership of these magnificent animals and the cub petting industry in the U.S.</p>

        <p>No matter how you choose to give, every dollar brings us a step closer to a world where all wild cats can live free, the way they were meant to be. Your generosity means the world to us, and we promise to make your donation go as far as possible in achieving our shared vision.</p>

        <p>We truly appreciate your support. Whether big or small, every donation helps pave the way for a more humane and sustainable world.</p>
      </div>

    </div>

    
  );
}

export default Donate;