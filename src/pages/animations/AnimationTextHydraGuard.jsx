// src/components/AnimatedText.js
import React from 'react';
import Lottie from 'react-lottie';
import './AnimatedText.css'; // Import the CSS file for animations

// Import Lottie JSON files
import animation from '../../assets/animations/5.json'; // Replace with your actual file path

const AnimationTextHydraGuard = (props) => {
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
        <div className="animated-text" style={{ marginRight: '30px' }}>
          A Hybrid Approach for backdoor immunity in federated learning using trigger inversion and simple tuning
        </div>
        <div className="animated-text-left">
          <Lottie options={defaultOptions1} height={150} width={150} />
        </div>
      </div>
    </div>
  );
};

export default AnimationTextHydraGuard;
