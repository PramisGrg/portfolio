"use client";
import { IconCloud } from "@/app/ui/cloud";
import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import React from "react";
import ProfilePicture from "@/public/profile-pic.jpeg";
import { motion } from "framer-motion";
import { SlideP } from "@/app/animation/animate";
import { TimelineDemo } from "./timeline/timeline";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "jest",
  "git",
  "figma",
];

const About = () => {
  return (
    <>
      <div className="min-h-screen max-w-[90vw] mx-auto">
        <Navbar />
        <div className="text-5xl tracking-wide my-20 leading-normal">
          <p>Giving reality to Ideas</p>
          <p>Let create something big Together</p>
        </div>
        <div className="grid grid-cols-2 px-6 gap-16">
          <div>
            <Image
              height={1000}
              width={1000}
              src={ProfilePicture}
              alt="Profile Picture"
              className="h-40 w-40 rounded-full"
            />
            <motion.p
              variants={SlideP}
              initial="initial"
              animate="animate"
              className="text-xl text-gray-500 leading-normal pt-10"
            >
              I am a passionate software developer with a knack for creating
              innovative and efficient solutions that drive user satisfaction
              and business succes
            </motion.p>
          </div>
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
      <div className="py-10 bg-white">
        <TimelineDemo />
      </div>
      <Footer />
    </>
  );
};

export default About;
