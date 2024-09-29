/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";
import Image from "next/image";

function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between">
      <div className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center">
            <Image
              alt="Aman Kumar"
              className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500 rounded-full"
              src="https://t4.ftcdn.net/jpg/05/94/38/27/360_F_594382716_SA2EelKT0OuHMO78lYv3JRXWMuCwkTLD.jpg"
              width="60"
              height={60}
            />
            {"Aman Kumar".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim"
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </div>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${
                currentPage === item.title
                  ? "opacity-100 font-bold"
                  : "opacity-80 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
