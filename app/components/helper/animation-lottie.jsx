"use client"

import Lottie from "lottie-react";

export const AnimationLottie = ({ animationPath, width = '95%' }) => {
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