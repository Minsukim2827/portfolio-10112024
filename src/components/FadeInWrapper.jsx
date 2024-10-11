
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import useScrollDirection from "@/hooks/useScrollDirection";

const FadeInWrapper = ({ children, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });
  const scrollDir = useScrollDirection();

  const hiddenState = {
    opacity: 0,
    y: scrollDir === "down" ? 50 : -50,
  };

  const visibleState = {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <motion.div
      ref={ref}
      initial={hiddenState}
      animate={inView ? visibleState : hiddenState}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
