"use client";
import Image from "next/image";
import React, { useRef } from "react";
import profilePic from "@/public/profile-pic.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import RippleButton from "@/app/ui/button";
import Downfooter from "./down-footer/page";

const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <motion.section
      ref={container}
      style={{ y }}
      className="bg-primary text-white"
    >
      <div className="max-w-[80vw] py-[4rem] mx-auto">
        <div className="flex text-6xl space-y-4 flex-col">
          <div className="flex space-x-6">
            <Image
              height={1000}
              width={1000}
              src={profilePic}
              alt="profile picture image"
              className="w-28 h-28 rounded-full"
            />
            <span className="mt-[2rem]">Lets work</span>
          </div>
          <span>together</span>
        </div>
        <motion.div
          style={{ x }}
          className="flex items-center justify-center relative"
        >
          <button
            onClick={() => {
              console.log("I am clicked");
            }}
            className="w-60 h-60 absolute overflow-hidden bg-[#455CE9] text-white rounded-full flex items-center justify-center cursor-pointer z-10 realtive right-0"
          >
            <p className="text-xl font-light">Get in touch</p>
          </button>
        </motion.div>
        <div className="mt-60 text-2xl space-y-6">
          <p>Shoot me email at</p>
          <span className="flex space-x-4">
            <RippleButton>gurungpramis361@gmail.com</RippleButton>
            <RippleButton>+977 9866060075</RippleButton>
          </span>
        </div>
      </div>
      <Downfooter />
    </motion.section>
  );
};

export default Footer;
