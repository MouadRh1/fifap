import { motion } from "framer-motion";

const MotionSection = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}  // Commence avec une opacité à 0 et descend de 50px
      whileInView={{ opacity: 1, y: 0 }} // Quand visible, fade-in et monte à sa position normale
      transition={{ duration: .5, ease: "easeOut" }} // Animation fluide
      viewport={{ once: true, amount: 0.2 }} // L’animation se joue une seule fois lorsque 20% de la section est visible
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
