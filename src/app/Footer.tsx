import React from "react";
import { SiGithub, SiInstacart, SiInstagram, SiTwitter } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="w-full mt-4 flex items-start justify-between lg:flex-row flex-col">
      <div>
      <p>Thank You for Visiting!</p>

        <p>&copy;2024 Silly Questions | All Rights Reserved</p>
        <p className="flex items-center">
          Made with &#10084; by
          <a
            href="https://nilaacodes.vercel.app"
            target="_blank"
            className="ml-1 underline text-blue-700"
          >
            Nilaacodes
          </a>
        </p>
      </div>
      <div className="flex flex-col lg:items-end items-start lg:mt-0 mt-2">
        <p className="text-right">For any Feedbacks:</p>
        <div className="flex gap-3 items-center justify-items-end">
          <a href="https://x.com/nilaacode" target="_blank">
            <SiTwitter size={24}/>
          </a>
          <a href="https://github.com/nilaachandra" target="_blank">
            <SiGithub size={24}/>
          </a>
          <a href="">
            <SiInstagram size={24}/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;