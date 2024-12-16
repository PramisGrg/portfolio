"use client";

import Image from "next/image";
import { Tabs } from "@/app/ui/tabs";

export function Project() {
  const tabs = [
    {
      title: "Sahaj Yatra",
      value: "sahaj yatra",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-violet-900">
          <p>Sahaj Yatra</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Hotel Honi",
      value: "hotel honi",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-violet-900">
          <p>Hotel Honi</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Drag & Drop Todo",
      value: "drag and drop",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-violet-900">
          <p>Drag and drop</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-32">
      <h1 className="text-5xl font-neueMontreal font-thin mb-4">Works</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
