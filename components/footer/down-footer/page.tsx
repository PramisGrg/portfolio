import React from "react";

const Downfooter = () => {
  return (
    <div className="flex p-6 justify-between">
      <div className="flex flex-col space-y-2">
        <span className="text-center text-gray-500">From</span>
        <span>made with 🤍 in Next </span>
      </div>
      <div className="flex flex-col space-y-2">
        <span className="text-center  text-gray-500">Socials</span>
        <div className="space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Github
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Downfooter;
