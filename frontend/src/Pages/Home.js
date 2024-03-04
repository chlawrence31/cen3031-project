import React from 'react';
import { TopAnimalSlides } from './TopAnimalSlides'
import topAnimals from './TopAnimals.json';

console.clear();

const breakPoints = [
  { width: 1, itemsToShow: 1},
  { width: 550, itemsToShow: 2},
  { width: 768, itemsToShow: 3},
  { width: 1200, itemsToShow: 4},
];


function HomePage() {
  return (
    <div className="Home">
      <h1 style={{ textAlign: "center" }}>Big Cats Rescue</h1>
      <h3 style={{ textAlign: "center" }}>Our mission is to protect and preserve large cats of all species. Make your contribution today!</h3>
      <h2 style={{ textAlign: "center" }}>Meet Our Most Popular Animals</h2>
      <TopAnimalSlides topAnimals={topAnimals}/>
    </div>
  );
}

export default HomePage;
