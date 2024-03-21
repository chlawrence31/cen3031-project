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
      <img src = "https://media.istockphoto.com/id/1283050796/vector/flat-design-under-construction-concept.jpg?s=1024x1024&w=is&k=20&c=_2RXRXtQSYd5ThdeUblSFXL9dcduioLK_dKz2QWOupQ="></img>
    </div>
  );
}

export default Gallery;

