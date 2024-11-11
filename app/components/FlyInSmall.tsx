"use client";
import { motion } from "framer-motion";

interface TextFlyInProps {
  text: string;
}

const TextFlyIn: React.FC<TextFlyInProps> = ({ text }) => {
  // Definiert das Animationsverhalten für jedes Zeichen
  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="flex flex-wrap overflow-hidden leading-tight">
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: index * 0.1, // Verzögerung pro Buchstabe für den "Einflug"-Effekt
            duration: 0.5,
            ease: "easeOut",
          }}
          className="inline-block" // Lässt jedes Zeichen als Block erscheinen
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default TextFlyIn;
