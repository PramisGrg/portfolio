"use client";
import { IconCloud } from "@/app/ui/cloud";
import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import React from "react";
import ProfilePicture from "@/public/profile-pic.jpeg";
import { motion } from "framer-motion";
import { TimelineDemo } from "./timeline/timeline";
import { Link } from "lucide-react";

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
        <div className="grid md:grid-cols-2 px-6 gap-16">
          <div className="order-2 md:order-1">
            <Image
              height={1000}
              width={1000}
              src={ProfilePicture}
              alt="Profile Picture"
              className="h-40 w-40 rounded-full"
            />
            <motion.p className="text-xl text-gray-500 leading-normal pt-10">
              I am a passionate software developer with a knack for creating
              innovative and efficient solutions that drive user satisfaction
              and business succes
            </motion.p>
          </div>
          <div className="order-1 md:order-2">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
      <div className="py-10 bg-white">
        <TimelineDemo />
      </div>
      <div className="max-w-[90vw] py-10 mx-auto space-y-20">
        <h1 className="text-5xl">Publications</h1>
        <div className="space-y-8 text-2xl text-gray-400">
          <h3 className="text-3xl text-gray-600">
            <a
              href="http://conference.ioe.edu.np/publications/ioegc15/IOEGC-15-015-B1-4-51.pdf"
              target="_blank"
              className="flex space-x-2"
            >
              <p>Sahaj Yatra: A Digital Approach to Transportation</p>
              <Link className="mt-2" />
            </a>
          </h3>
          <p>15th IOE Graduate Conference</p>
          <p>
            This is a digital bus fare management system, which address the
            problems faced by both passengers and bus owners in fare collection
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
