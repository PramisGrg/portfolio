"use client";
import { useEffect, useState } from "react";
import Preloader from "./components/preloader";
import { AnimatePresence } from "framer-motion";

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
          <main key="main-content">
            <h1 className="">My name is Pramis</h1>
            <h2 className="text-xl">I am a Software Engineer</h2>
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}
