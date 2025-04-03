"use client";
import Image from "next/image";
import { Tabs } from "@/app/ui/tabs";
import sahajYatraImage from "@/public/works/sahaj-yatra.png";
import restroFlowImage from "@/public/works/restroflow.png";

export default function Project() {
  const tabs = [
    {
      title: "Sahaj Yatra",
      value: "sahaj yatra",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-violet-900">
          <p>Sahaj Yatra</p>
          <a
            className="cursor-pointer block absolute inset-x-0 bottom-10 w-[90%] mx-auto"
            href="https://sahaj-yatra-frontend.vercel.app/"
            target="_blank"
          >
            <Image
              src={sahajYatraImage}
              alt="Sahaj Yatra project screenshot"
              width="1000"
              height="1000"
              className="object-cover object-left-top w-full h-auto max-h-[80%] rounded-xl"
            />
          </a>
        </div>
      ),
    },
    {
      title: "RestroFlow",
      value: "restroflow",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-pink-900">
          <p>RestroFlow</p>
          <a
            className="cursor-pointer block absolute inset-x-0 bottom-10 w-[90%] mx-auto"
            href="https://hotel-honi.vercel.app/"
            target="_blank"
          >
            <Image
              src={restroFlowImage}
              alt="RestroFlow project screenshot"
              width="1000"
              height="1000"
              className="object-cover object-left-top w-full h-auto max-h-[80%] rounded-xl"
            />
          </a>
        </div>
      ),
    },
    {
      title: "Drag & Drop Todo",
      value: "drag and drop",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black to-violet-900">
          <p>Drag & Drop Todo</p>
          <a
            className="cursor-pointer block absolute inset-x-0 bottom-10 w-[90%] mx-auto"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={restroFlowImage}
              alt="Drag & Drop Todo project screenshot"
              width="1000"
              height="1000"
              className="object-cover object-left-top w-full h-auto max-h-[80%] rounded-xl"
            />
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="md:h-[60rem] [perspective:1000px] relative flex flex-col max-w-[95vw] mx-auto w-full items-start justify-start md:my-32 my-20 h-[60rem]">
      <h1 className="text-5xl font-neueMontreal font-thin mb-4">Works</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}
