import React from 'react';
import logo from '../logo.svg';
import './About.css';

const About = () => (
    <div className="about">
        <h1>About</h1>
        <h3>Created with React and React Router</h3>
        <img src={logo} className="react-logo" alt="logo" />
    </div>
);

export default About;