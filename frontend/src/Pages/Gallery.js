import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Gallery() {

  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAllAnimals = async () => {
      try {
        const res = await axios.get("http://localhost:8000/animals");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllAnimals();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
    </div>
  );
}

export default Gallery;

