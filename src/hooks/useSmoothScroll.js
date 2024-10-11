
import { useCallback } from 'react';
import { useSpring, useScroll } from 'framer-motion';

const useSmoothScroll = () => {
  const { scrollY } = useScroll();
  const scrollYSpring = useSpring(scrollY, {
    damping: 22,
    mass: 0.1,
    stiffness: 200,
  });

  const scrollToSection = useCallback((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  }, []);

  return { scrollYSpring, scrollToSection };
};

export default useSmoothScroll;
