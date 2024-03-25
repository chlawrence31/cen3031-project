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
        <h2 style={{ textAlign: 'center'}}>Our Goals</h2>
      </div>

      <div style = {{ fontFamily: 'Copperplate, serif', fontSize: '20px'}}>
        <p>Welcome to Big Cat Rescue, a dedicated organization committed to the preservation and protection of exotic wildcat species. Founded with a passion for wild cat protection and conservation, we have been at the forefront of critical efforts to safeguard these remarkable creatures for over 31 years.</p>

        <p>Our journey began by recognizing the urgent need to address the issues faced by big cats in captivity. Through tireless advocacy and collaboration, we played a pivotal role in the passing of the U.S. federal Big Cat Public Safety Act in December 2022. This landmark legislation stands as a testament to our unwavering commitment to the well-being of big cats across the nation.</p>

        <p>While our efforts in securing legislation are pivotal, we believe that true conservation lies beyond the walls of captivity. To ensure the long-term survival of wildcat species, we have turned our attention to protecting them in their natural habitats. By funding insitu projects, we empower local communities and conservation initiatives to combat the various threats faced by wildcats, including the perils of the pet trade, wildlife trafficking, bushmeat and sport hunting, as well as the collection of these magnificent creatures as zoo specimens.</p>

        <p>At Big Cat Rescue we are driven by a shared vision of a future where wildcats roam freely in their natural habitats, unhindered by human interference. We recognize the intrinsic value of these awe-inspiring creatures and the pivotal role they play in maintaining the delicate balance of our ecosystems. Through collaboration, education, and unwavering dedication, we strive to protect and preserve the irreplaceable legacy of wildcats for generations to come.</p>

        <p>Join us in our mission to make a meaningful impact on the lives of these extraordinary animals. Our Goal is for our donors to find their gifts to us to be among the most satisfying they make by accomplishing our mission in the most financially responsible manner possible. We consistently receive Charity Navigator’s highest 4 star rating. Together, we can create a world where wildcats thrive, where they inspire awe and respect, and where their existence serves as a testament to the beauty and diversity of our planet.</p>
      </div>

    </div>

  );
}

export default HomePage;
