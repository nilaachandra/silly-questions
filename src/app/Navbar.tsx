import Link from "next/link";
import React from "react";
import { BsPatchQuestion } from "react-icons/bs";
const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-between">
      <Link href={"/"} className="p-2 flex gap-2 justify-center items-center hover:text-pink-500 transition-all duration-300  text-white rounded-lg text-xl font-bold">
        <BsPatchQuestion size={28}/>Silly Questions
      </Link>
      <a href="https://github.com/nilaachandra/silly-questions" target="_blank" className="bg-zinc-700 text-white p-2 rounded-lg">⭐ on <span className="text-blue-500 underline">GitHub</span></a>
    </header>
  );
};

export default Navbar;
