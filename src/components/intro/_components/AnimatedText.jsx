
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './AnimatedText.css'; 

const words = ["Software Developer", "Software Engineer"];

const AnimatedText = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [speed, setSpeed] = useState(100); // Initial speed (ms per character)

  useEffect(() => {
    const handleTyping = () => {
      const current = wordIndex % words.length;
      const fullText = words[current];

      // Update the displayed text based on whether it's typing or deleting
      setText(prev => isDeleting
        ? fullText.substring(0, prev.length - 1)
        : fullText.substring(0, prev.length + 1)
      );


      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setSpeed(2000); // Hold for 3 seconds
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex(prev => prev + 1);
        setSpeed(300); // Hold for 0.5 seconds before typing next word
      } else {
        setSpeed(isDeleting ? 60 : 50); // Adjust typing/backspacing speed
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, speed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="text-red-500"
    >
      {text}
      <span className="blinking-cursor"></span>
    </motion.span>
  );
};

export default AnimatedText;
