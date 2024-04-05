import { useState, useEffect } from 'react';
import scroll from '../assets/scroll.svg';
import '../index.css'

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the total height of the webpage
      const totalHeight = document.documentElement.scrollHeight;

      // Calculate the current scroll position
      const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

      // Calculate the halfway point
      const midWay = totalHeight / 4;

      // Update state to show button when scrolled past halfway
      setShowButton(scrollPosition > midWay);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
        <button
            onClick={() => scrollToTop()}
            className="scroll-button"
            style={{ display: showButton ? 'block' : 'none' }}
        >
            <img src={scroll} alt="" />
        </button>
  );
};

export default ScrollButton;
