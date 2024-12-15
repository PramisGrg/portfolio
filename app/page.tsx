"use client";
import { useEffect, useState } from "react";
import Preloader from "./components/preloader";
import { AnimatePresence } from "framer-motion";
import HeroSection from "./components/hero-section/page";
import Project from "./components/project/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <>
            <HeroSection />
            <Project />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
