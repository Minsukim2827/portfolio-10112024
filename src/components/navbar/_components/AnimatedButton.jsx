
import { motion } from "framer-motion";
import PropTypes from "prop-types";


const AnimatedButton = ({
  onClick,
  children,
  className = "",
  ariaDescribedBy = "",
}) => {

  const underlineVariants = {
    initial: {
      scaleX: 0,
    },
    hover: {
      scaleX: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    unhover: {
      scaleX: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.button
      onClick={onClick}
      className={`relative flex items-center ${className}`}
      aria-describedby={ariaDescribedBy}
      initial="initial"
      whileHover="hover"
      whileTap="hover"

    >
      {children}

      <motion.span
        className="absolute left-0 bottom-0 h-0.5 bg-red-500 w-full origin-left"
        variants={underlineVariants}
      />
    </motion.button>
  );
};


AnimatedButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
};

export default AnimatedButton;
