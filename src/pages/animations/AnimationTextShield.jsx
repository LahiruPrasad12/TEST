// src/components/AnimatedText.js
import React from 'react';
import Lottie from 'react-lottie';
import './AnimatedText.css'; // Import the CSS file for animations

// Import Lottie JSON files
import animation from '../../assets/animations/4.json'; // Replace with your actual file path

const AnimationTextSheild = () => {
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
      <div className="animated-text-container" style={{ marginTop: 20 }}>
        <div className="animated-text-left">
          <Lottie options={defaultOptions1} height={100} width={100} />
        </div>
        <div className="animated-text" style={{ marginLeft: '30px' }}>
          COAE-SMC Enhanced federate learning system
        </div>
      </div>
    </div>
  );
};

export default AnimationTextSheild;
