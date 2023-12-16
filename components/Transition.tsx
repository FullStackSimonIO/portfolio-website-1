"use client";
import { motion } from "framer-motion";
import React from "react";

const TransitionVariants = {
  initial: {
    y: "100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "0%",
  },
  exit: {
    y: ["0%", "100%"],
    height: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <div>
      <motion.div className="fixed right-0 h-screen bottom-full z-[30] bg-[#2e2257]"></motion.div>
    </div>
  );
};

export default Transition;
