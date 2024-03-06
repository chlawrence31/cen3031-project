import React, { Component } from 'react';
import AnimalSlider from '../Components/AnimalSlider'; // Check this line to ensure the correct path

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <AnimalSlider />
            </div>
        );
    }
}
