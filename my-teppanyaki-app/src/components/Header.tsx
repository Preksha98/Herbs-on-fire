"use client";
import * as React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex z-10 flex-col pr-20 pb-9 pl-8 w-full text-2xl font-bold whitespace-nowrap text-slate-50 max-md:px-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1b50d922baa06ee08e49d3e6eeb3f0a49346ce8?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
        alt="Restaurant Logo"
        className="object-contain z-10 max-w-full aspect-square w-[154px]"
      />
      <nav className="flex flex-wrap gap-10 items-center self-end -mt-24 max-md:max-w-full">
        <a href="#home" className="self-stretch my-auto">
          Home
        </a>
        <a href="#about" className="self-stretch my-auto">
          About
        </a>
        <a href="#reservation" className="self-stretch my-auto">
          Reservation
        </a>
        <a href="#blog" className="self-stretch my-auto">
          Blog
        </a>
        <a href="#contact" className="self-stretch my-auto">
          Contact
        </a>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec14e4769c6abeb61a3053fe2fd444147e1d31ea?placeholderIfAbsent=true&apiKey=8d9937e7ae7c4c5cb6ab8b6aa3c1e348"
          alt="User Profile"
          className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-[1.1] w-[65px]"
        />
      </nav>
    </header>
  );
};
