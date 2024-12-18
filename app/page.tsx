"use client";
import { useEffect, useState } from "react";
import Preloader from "../components/preloader";
import { AnimatePresence } from "framer-motion";
import HeroSection from "../components/hero-section/page";
import Project from "../components/work/page";
import Footer from "../components/footer/page";
import Sliding from "../components/sliding/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2000);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader key="preloader" />}
        </AnimatePresence>
        <div key="main-content">
          <HeroSection />
          <Project />
          <Sliding />
          <Footer />
        </div>
      </AnimatePresence>
    </div>
  );
}
