import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const layers = [
  {
    id: "orange",
    background: "linear-gradient(115deg, #FF842B 0%, #FF9B51 100%)",
  },
  {
    id: "burgundy",
    background: "linear-gradient(115deg, #321B26 0%, #48213F 100%)",
  },
  {
    id: "plum",
    background: `
      radial-gradient(
        ellipse at 15% 100%,
        rgba(243, 78, 170, 0.28),
        transparent 55%
      ),
      linear-gradient(
        115deg,
        #171019 0%,
        #321B26 55%,
        #791D35 100%
      )
    `,
  },
];

const TransitionEffect = () => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        pointerEvents: "none",
      }}
    >
      {layers.map((layer, index) => (
        <motion.div
          key={layer.id}
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          exit={{ x: "0%" }}
          transition={{
            x: {
              duration: 0.65,
              delay: index * 0.12,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: layers.length - index,
            background: layer.background,
          }}
        />
      ))}
    </div>
  );
};

export default TransitionEffect;