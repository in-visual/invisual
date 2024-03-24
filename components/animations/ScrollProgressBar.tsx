import React, { useState, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import { brandingAccent } from "../../styles/globalstyles";

const ScrollProgressBar: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  // Function to handle updating the scroll position
  const handleScroll = () => {
    const totalScrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const currentScrollPosition = window.scrollY;
    const scrollPercentage = (currentScrollPosition / totalScrollHeight) * 100;
    setScrollY(scrollPercentage);
  };

  // Attaching and cleaning up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Using react-spring to animate the width of the progress bar
  const barAnimation = useSpring({
    width: `${scrollY}%`,
  });

  return (
    <animated.div
      style={{
        ...barAnimation,
        position: "absolute",
        bottom: -1,
        left: 0,
        height: "1px",
        backgroundColor: "#01a7a7",
        zIndex: 10000000,
        boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
      }}
    ></animated.div>
  );
};

export default ScrollProgressBar;
