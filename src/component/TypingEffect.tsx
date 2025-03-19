import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, 1500); // Pause before restarting
    }
  }, [index, text, speed]);

  return <p className="text-lg text-center">{displayText}</p>;
};

export default TypingEffect;

