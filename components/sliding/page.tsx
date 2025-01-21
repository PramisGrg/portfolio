"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import movie1 from "@/public/slider-image/movie1.png";
import movie2 from "@/public/slider-image/movie2.png";
// import movie3 from "@/public/slider-image/movie3.png";
// import movie4 from "@/public/slider-image/movie4.png";
// import abc1 from "@/public/slider-image/abc1.png";
import abc2 from "@/public/slider-image/abc2.png";
// import hotel1 from "@/public/slider-image/hotel1.png";
import yatra1 from "@/public/slider-image/yatra1.png";
import yatra2 from "@/public/slider-image/yatra2.png";
import yatra3 from "@/public/slider-image/yatra3.png";
// import yatra4 from "@/public/slider-image/yatra4.png";
import yatra5 from "@/public/slider-image/yatra5.png";
import yatra6 from "@/public/slider-image/yatra6.png";
// import yatra7 from "@/public/slider-image/yatra7.png";

const slider1 = [
  {
    color: "#e3e5e7",
    src: movie1,
  },
  {
    color: "#d6d7dc",
    src: movie2,
  },
  {
    color: "#e3e3e3",
    src: yatra1,
  },
  {
    color: "#21242b",
    src: yatra3,
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: yatra2,
  },
  {
    color: "#e5e0e1",
    src: abc2,
  },
  {
    color: "#d7d4cf",
    src: yatra5,
  },
  {
    color: "#e1dad6",
    src: yatra6,
  },
];

export default function Sliding() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div
      ref={container}
      className="flex flex-col gap-[3vw] relative md:mt-60 mt-48 bg-white z-10 overflow-hidden"
    >
      <motion.div
        style={{ x: x1 }}
        className="flex relative gap-[3vw] w-[120vw] -left-[10vw]"
      >
        {slider1.map((project, index) => (
          <div
            key={index}
            className="w-1/4 h-[20vw] flex items-center justify-center"
            style={{ backgroundColor: project.color }}
          >
            <div className="relative w-4/5 h-4/5">
              <Image
                fill={true}
                alt="image"
                src={project.src}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="flex relative gap-[3vw] w-[120vw] -left-[10vw]"
      >
        {slider2.map((project, index) => (
          <div
            key={index}
            className="w-1/4 h-[20vw] flex items-center justify-center"
            style={{ backgroundColor: project.color }}
          >
            <div className="relative w-4/5 h-4/5">
              <Image
                fill={true}
                alt="image"
                src={project.src}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
