// src/components/AnimatedText.js
import React from 'react';
import Lottie from 'react-lottie';
import './AnimatedText.css'; // Import the CSS file for animations

// Import Lottie JSON files
import animation from '../../assets/animations/3.json'; // Replace with your actual file path

const AnimationTextSecuind = (props) => {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="animated-text-wrapper">
      <div className="animated-text-container" >
        <div className="animated-text" style={{ marginRight: '30px' }}>
          Enhancing the Security of the Global Model by Safeguarding it from Model Poisoning Attacks
        </div>
        <div className="animated-text-left">
          <Lottie options={defaultOptions1} height={200} width={200} />
        </div>
      </div>
    </div>
  );
};

export default AnimationTextSecuind;
