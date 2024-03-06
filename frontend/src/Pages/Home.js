import React from 'react';
import { TopAnimalSlides } from './TopAnimalSlides';
import topAnimals from './TopAnimals.json';
import AnimalSlider from '../Components/AnimalSlider'; // Check this line to ensure the correct path

function HomePage() {
  return (
    <div style={{ position: 'relative' }}> {/* Apply position relative to the container */}
      <AnimalSlider />
      <div className="Home" style={{ marginTop: '50px', marginBottom: '50px', position: 'relative' }}> {/* Apply position relative to this div */}
        <h1 style={{ textAlign: "center" }}>Mission Statement</h1>
        <h3 style={{ textAlign: "center" }}>Our mission is to safeguard the world’s exotic wildcat species through a multifaceted approach. Make your contribution today!</h3>
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Meet Our Most Popular Animals</h2>
        <TopAnimalSlides topAnimals={topAnimals} />
      </div>
    </div>
  );
}

export default HomePage;
