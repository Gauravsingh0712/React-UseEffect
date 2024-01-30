import React, { useEffect, useState } from "react";

const WindowSizeTracker = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <div>
      <p>Window Width: {windowSize.width}px</p>
      <p>Window Height: {windowSize.height}px</p>
    </div>
  );
};

export default WindowSizeTracker;
