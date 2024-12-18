"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/app/ui/background";
import { Globe, MoveDownRight } from "lucide-react";
import Navbar from "../navbar/navbar";

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
  const direction = useRef(-1); // Use useRef for direction
  const xPercent = useRef(0); // Use useRef for xPercent

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize ScrollTrigger
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction.current = e.direction * -1), // Update direction using useRef
      },
      x: "-500px",
    });

    // Start animation loop
    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame); // Clean up on unmount
  }, []);

  const animate = () => {
    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent.current });
    gsap.set(secondText.current, { xPercent: xPercent.current });
    xPercent.current += 0.08 * direction.current; // Use direction.current
    requestAnimationFrame(animate);
  };

  return (
    <motion.div
      variants={slide}
      initial="initial"
      animate="animate"
      className="relative text-black flex h-screen overflow-hidden"
    >
      <AuroraBackground>
        <div className="h-screen w-screen ">
          <Navbar />
        </div>
      </AuroraBackground>
      <div className="absolute top-[calc(100vh-350px)]">
        <div ref={slider} className="relative whitespace-nowrap">
          <p
            ref={firstText}
            className="relative m-0 text-[230px] text-black pr-[50px]"
          >
            Software Developer -
          </p>
          <p
            ref={secondText}
            className="absolute text-black left-full top-0 m-0 text-[230px] pr-[50px]"
          >
            Software Developer -
          </p>
        </div>
      </div>
      <div
        data-scroll
        data-scroll-speed={0.1}
        className="absolute top-[35%] left-[65%] text-2xl"
      >
        <MoveDownRight className="w-5 h-5 mb-[10px] font-thin" />
        <p className="m-0 mb-[10px]">Hi, I am Pramis Gurung</p>
        <p>Engineer and software developer</p>
      </div>
      <div className="absolute justify-between top-[35%] w-56 flex gap-4 left-0 text-xl bg-primary text-secondary p-4 rounded-r-full">
        <section>
          <p>Located </p>
          <p>in Nepal</p>
        </section>
        <section className="bg-secondary text-primary rounded-full p-4 flex items-center">
          <Globe className="w-10 h-10" />
        </section>
      </div>
    </motion.div>
  );
};

export default HeroSection;
