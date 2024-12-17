import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-6">
      <Link href={"/"}>
        <div className="flex cursor-pointer group">
          <div className="flex relative overflow-hidden w-[120px] whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
            <p className="relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-full">
              Code by
            </p>
            <p className="relative pl-2 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-[65px]">
              Pramis
            </p>
            <p className="absolute left-[120px] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-[65px]">
              Gurung
            </p>
          </div>
        </div>
      </Link>

      <div className="space-x-6">
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
