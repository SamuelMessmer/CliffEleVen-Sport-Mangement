"use client";
import React from "react";
import { motion } from "framer-motion";

const SlideInText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-200px" }}
    >
      <p className="text-7xl font-extrabold text-orange-500">hallo Welt</p>
    </motion.div>
  );
};

export default SlideInText;
