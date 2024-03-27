import React from 'react';
import DonationBanner from '../Components/DonationBanner';
import { Link } from 'react-router-dom';

function Donate() {
  return (
      <div>
        <DonationBanner/>
        <div className = 'mt-5'>
          <h1 className="text-center">Donate to Big Cat Rescue</h1>
          <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <input type="number" id="donationAmount" class="form-control mb-3" min="0" required 
          placeholder = "$ Donation amount"></input>
          <div className ="text-center mt-3">
          <Link to="/donationlogin" className ="btn btn-lg btn-primary btn-block" type="submit" style={{ marginBottom: '100px'}}>Donate</Link>
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