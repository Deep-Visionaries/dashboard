import React from "react";
import TypingEffect from "./TypingEffect"; // Ensure you have this component

const MagicConverter = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Title with Neon Effect */}
      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white px-8 py-6 rounded-lg text-center max-w-lg">
        <h1 className="text-3xl font-bold">
          <span className="neon-text">Magic</span> Converter
        </h1>
      </div>

      {/* Typing Effect for Description */}
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white px-8 py-6 rounded-lg text-center max-w-lg">
        <TypingEffect
          text="Welcome to Magic Converter! Transform your content effortlessly—whether it's summarizing videos, generating AI-powered scripts, or optimizing for engagement. Let AI do the magic for you!"
          speed={50}
        />
      </div>
    </div>
  );
};

export default MagicConverter;
