import Downfooter from "@/components/footer/down-footer/page";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import ProfileImage from "@/public/profile-pic.jpeg";
import React from "react";
import RippleButtonRounded from "@/app/ui/rounded-ripple-buton";

const Contact = () => {
  return (
    <div className="bg-primary text-white min-h-screen">
      <Navbar />
      <div className="max-w-[900px] mx-auto grid grid-cols-[80%_20%] gap-20 py-20">
        <div className="">
          <div className="flex flex-col text-[5rem]">
            <span>Lets start a </span>
            <span>Project Together</span>
          </div>
          <div className="flex flex-col py-20 text-2xl">
            <div className="flex flex-col border-y border-gray-500 py-6">
              <label className="space-x-4">
                <span className="text-xl text-gray-500">01</span>
                <span> What is your name ?</span>
              </label>
              <input
                className="bg-primary p-4 focus:outline-none text-gray-500"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col py-6">
              <label className="space-x-4">
                <span className="text-xl text-gray-500">02</span>
                <span> What is your email ?</span>
              </label>
              <input
                className="bg-primary p-4 focus:outline-none text-gray-500"
                placeholder="john@doe.com"
              />
            </div>
            <div className="flex flex-col border-y border-gray-500 py-6">
              <label className="space-x-4">
                <span className="text-xl text-gray-500">03</span>
                <span>Your message </span>
              </label>
              <textarea
                className="bg-primary p-4 focus:outline-none text-gray-500"
                placeholder="Hello, can we start a project together ..."
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-10 py-20">
          <Image
            width={1000}
            height={1000}
            src={ProfileImage}
            alt="Profile Image"
            className="rounded-full w-44 h-44"
          />
          <div className="space-y-10 py-10 text-white">
            <div className="space-y-2">
              <span className="text-gray-500">Contact Details</span>
              <p>gurungpramis361@gmail.com</p>
            </div>
            <div className="space-y-2">
              <span className="text-gray-500">Based in </span>
              <p>Pokhara, Nepal</p>
            </div>
            <div className="space-y-2">
              <span className="text-gray-500">Socials</span>
              <p>LinkedIn</p>
              <p>Facebook</p>
              <p>Githhub</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <RippleButtonRounded>Send a email</RippleButtonRounded>
        </div>
      </div>
      <Downfooter />
    </div>
  );
};

export default Contact;
