"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";

const slide = {
  initial: {
    y: 300,
  },
  animate: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
};

const HeroSection = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.08 * direction;
  };

  return (
    <motion.div
      variants={slide}
      initial="initial"
      animate="animate"
      className="h-screen flex realtive"
    >
      <h1>This is hero Section</h1>
      <div className="absolute top-[calc(100vh-350px)]">
        <div ref={slider} className="relative whitespace-nowrap">
          <p ref={firstText} className="relative m-0 text-[230px] pr-[50px]">
            Software Developer -
          </p>
          <p
            ref={secondText}
            className="absolute left-full top-0 m-0 text-[230px] pr-[50px]"
          >
            Software Developer -
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
