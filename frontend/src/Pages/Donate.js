import React, {useState} from 'react';
import DonationBanner from '../Components/DonationBanner';
import { Link } from 'react-router-dom';

function Donate() {
  const [donationAmount, setDonationAmount] = useState();

  const handleAmountChange = (event) => {
    setDonationAmount(parseFloat(event.target.value));
  }

  return (
      <div>
        <DonationBanner/>
        <div className = 'mt-5'>
          <h1 className="text-center">Donate to Big Cat Rescue</h1>
          <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <div className="text-center mt-3" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <button onClick={() => setDonationAmount(5)} className="btn btn-lg btn-primary mr-2">$5</button>
            <button onClick={() => setDonationAmount(10)} className="btn btn-lg btn-primary mr-2">$10</button>
            <button onClick={() => setDonationAmount(25)} className="btn btn-lg btn-primary mr-2">$25</button>
            <button onClick={() => setDonationAmount(50)} className="btn btn-lg btn-primary mr-2">$50</button>
            <button onClick={() => setDonationAmount(100)} className="btn btn-lg btn-primary mr-2">$100</button>
            </div>
            <div className="text-center mt-3" style={{marginTop: "10px"}}>
              <input type="number" id="donationAmount" class="form-control mb-3" min="0" value={donationAmount} onChange={handleAmountChange} required 
            placeholder = "$ Custom Donation amount"></input>
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