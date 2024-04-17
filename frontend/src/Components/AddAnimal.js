import React, { useState } from 'react';
import axios from 'axios';

const AddAnimal = () => {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [sex, setSex] = useState(0);
    const [age, setAge] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
        // Send donation amount and animal ID to backend
        const response = await axios.post('http://localhost:8000/newAnimal', {
            name: name,
            species: species,
            sex: sex,
            age: age,
            description: description,
            image: image,
            amount: donationAmount,
        });
        console.log('Donation successful:', response.data);
        } catch (error) {
        console.error('Error donating:', error);
        }
    };

  return (
    // Code for input form goes here (ignore the div i added that to get rid of an error)
    // Review DonationForm.js for info on how to update each variable using useState()
    <div></div>
  );
}

export default AddAnimal;
