"use client"

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

const AnimationLottie = ({ animationPath, width = '95%' }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width,
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;