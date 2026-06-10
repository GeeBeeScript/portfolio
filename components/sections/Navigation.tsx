"use client";

import Image from "next/image";
import { ClipboardList, Sun, House } from "lucide-react";
import Link from "next/link";
const Navigation = () => {
  return (
    <nav className="my-5 transition-all duration-100 ease-in  font-hanken max-sm:w-full mx-auto bg-gray-50/50 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] text-[#444] max-w-lg flex justify-center gap-3 item-center py-3 px-4 rounded-full cursor-pointer">
      <div className="flex gap-2 justify-around items-center px-2 border-r-zinc-800/10 border-r trigger-hover">
        <span className="sm:block hidden">Home</span>{" "}
        <span>
          <House className="size-5 sm:size-7" />
        </span>
      </div>

      <Link
        href="https://x.com/SoftwareEngrGb"
        className="flex justify-center items-center px-3 border-r-zinc-800/10 border-r"
      >
        <Image
          src="/resources/x.svg"
          width={10}
          height={10}
          alt="X logo"
          className="w-5 h-5"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/mitchel-sodimu-5a7aab3a9/"
        className="flex justify-center items-center px-3 border-r-zinc-800/10 border-r"
      >
        <Image
          src="/resources/linkedin-svg.svg"
          width={10}
          height={10}
          alt="X logo"
          className="w-5 h-5"
        />
      </Link>
      <div
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="flex justify-around items-center px-3 border-r-zinc-800/10 border-r trigger-hover"
      >
        <ClipboardList className="size-5 sm:size-7" />
      </div>
      <div className="flex max-sm:hidden justify-around items-center px-3 border-r-zinc-800/10 border-r trigger-hover">
        <Sun className="size-5 sm:size-7" />
      </div>
      <div className="flex justify-around items-center px-3 ">
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="font-space text-[0.5rem] sm:text-[1rem] font-semibold bg-zinc-950 text-white px-4 py-2 rounded-4xl hover:shadow-lg hover:bg-zinc-950/90 transition-all duration-500 cursor-pointer trigger-hover"
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
