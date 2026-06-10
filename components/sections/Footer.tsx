import { Dot, Mail, Sparkle } from "lucide-react";
import Image from "next/image";
import React from "react";
import ShowModalBtn from "../sub/ShowModalBtn";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full border border-zinc-950/10 my-5 py-5 px-4">
      <div className="flex flex-col justify-between items-start gap-15">
        <div className="font-brico flex flex-col justify-center items-start gap-3 font-bold text-3xl">
          <div className="flex gap-3 justify-start items-center">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-950/70 via-[#222] to-zinc-950">
              Thanks
            </span>{" "}
            <span className="text-[5rem]">
              <Sparkle />
            </span>
          </div>
          <div className="text-transparent bg-clip-text bg-linear-to-r from-zinc-950/70 via-[#222] to-zinc-950">
            For Viewing
          </div>
        </div>
        <div className="flex space-x-3 w-full flex-wrap font-hanken">
          <ShowModalBtn className="flex gap-2 justify-center items-center my-3 bg-green-200 px-4 py-2 rounded-4xl font-semibold text-green-600 cursor-pointer">
            <span>
              <Dot size={15} className="w-4 h-4 stroke-9 p-0 m-0 block" />
            </span>{" "}
            <span>Available for Freelance</span>
          </ShowModalBtn>

          <Link
            href="mailto:engrmitchel@gmail.com"
            className="flex flex-wrap gap-2 justify-center items-center my-3 bg-purple-200 px-4 py-2 rounded-4xl font-semibold text-purple-600"
          >
            <span>
              <Mail />
            </span>
            <span>engrmitchel@gmail.com</span>
          </Link>
          <Link
            href="https://x.com/SoftwareEngrGb"
            className="flex gap-2 justify-center items-center my-3 bg-zinc-950/30 px-4 py-2 rounded-4xl font-semibold text-bg-zinc-950"
          >
            <span>
              <Image
                src="/resources/x.svg"
                alt="Another text"
                width={30}
                height={30}
              />
            </span>
            <span>@SoftwareEngrGb</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mitchel-sodimu-5a7aab3a9/"
            className="flex gap-2 justify-center items-center my-3 bg-blue-200 px-4 py-2 rounded-4xl font-semibold text-blue-600"
          >
            <span>
              <Image
                src="/resources/linkedin-svg.svg"
                alt="LinkedIn logo"
                width={30}
                height={30}
                className=""
              />
            </span>
            <span>Mitchel Sodimu</span>
          </Link>
        </div>
      </div>

      <div className="absolute w-5 h-5 top-0 left-0 border-t-2 border-l-2"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2"></div>
    </footer>
  );
};

export default Footer;
