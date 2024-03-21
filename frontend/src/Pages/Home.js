import React from 'react';
import { TopAnimalSlides } from './TopAnimalSlides';
import topAnimals from './TopAnimals.json';
import AnimalSlider from '../Components/AnimalSlider'; // Check this line to ensure the correct path

function HomePage() {
  return (
    <div style={{ position: 'relative' }}> {/* Apply position relative to the container */}
      <AnimalSlider/>
      <div className="Home" style={{ marginTop: '50px', marginBottom: '50px', position: 'relative', fontFamily: 'Copperplate, serif' }}> {/* Apply position relative to this div */}
        <h1 style={{ textAlign: "center" }}>Mission Statement</h1>
        <h3 style={{ textAlign: "center" }}>Our mission is to safeguard the world’s exotic wildcat species through a multifaceted approach. Make your contribution today!</h3>
      </div>

      <div style = {{ fontFamily: 'Copperplate, serif', fontSize: '20px'}}>
        <p>With an unwavering commitment to conservation, we strive to protect these majestic creatures both in captivity and in their natural habitats.&nbsp;</p>

        <p>By championing the Big Cat Public Safety Act and funding insitu projects, we work tirelessly to combat the threats posed by the pet trade, wildlife trafficking, bushmeat and sport hunting, as well as the collection of wildcats for zoos.&nbsp;</p>

        <p>Our ultimate goal is to <strong>ensure the survival and thriving future of wildcats</strong>, fostering a world where they can roam freely and their presence continues to enrich our planet.</p>
      </div>

      <div style = {{ fontFamily: 'Copperplate, serif' }}>
        <h2 style={{ textAlign: "center" }}>Meet Our Most Popular Animals</h2>
        <TopAnimalSlides topAnimals={topAnimals} />
      </div>

    </div>
  );
}

export default HomePage;
