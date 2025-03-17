"use client";
import React, { useEffect, useState } from "react";
import { slideUp, loader } from "../app/animation/animate";
import { motion } from "framer-motion";

const Preloader = () => {
  const [index, setIndex] = useState(0);

  const words = [
    "Hello",
    "नमस्ते",
    "Guten Tag",
    "你好",
    "Hola",
    "สวัสดีครับ",
    "こんにちは",
  ];

  useEffect(() => {
    if (index == words.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index, words.length]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="bg-primary h-screen flex items-center justify-center"
    >
      <motion.h1
        variants={loader}
        initial="initial"
        animate="animate"
        className="text-secondary text-3xl font-bold"
      >
        {words[index]}
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;
