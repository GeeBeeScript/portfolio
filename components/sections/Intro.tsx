import { CircleUserRound, Dot } from "lucide-react";
import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section className="max-w-[1350px] mx-auto relative flex py-5 px-4 justify-center items-center border border-zinc-950/10">
      <div className="flex justify-between items-center max-sm:min-h-[60vh]">
        <div className="w-[50%] space-y-2">
            <div className="px-1 py-1 text-sm rounded-[3rem] w-50 bg-green-500/60 text-green-900 font-semibold">
              <div className="flex justify-center items-center">
                <Dot
                  size={10}
                  className="w-4 h-4 stroke-9 p-0 m-0 block"
                />
                <p>Available for Freelance</p>
              </div>
          </div>
          <h1 className="text-3xl font-bold font-brico text-transparent bg-clip-text bg-gradient-to-r from-zinc-950/70 via-[#222] to-zinc-950">Developing Web Applications That Make Profit</h1>
          <p className="text-[#444] font-nunito">
            I’m Mitchel - a full-stack developer with over five years of
            experience building reliable, fast web applications from idea to
            launch. I focus on writing clean, maintainable code and creating
            smooth, intuitive user experiences across both frontend and backend.
          </p>
          <div className="flex items-center space-x-2">
            <button className="flex space-x-2 items-center rounded-[2rem] bg-zinc-950 text-white px-3 py-2 text-sm">
              <span>Book a Call</span>{" "}
              <span>
                <CircleUserRound className="text-white" />
              </span>
            </button>
            <button className="flex space-x-2 items-center rounded-[2rem] bg-white text-zinc-950 px-3 py-2 text-sm">View Portfolio</button>
          </div>
          <div></div>
        </div>
        <div className="w-[50%] sm:w-[30%] h-full bg-zinc-400 rounded-[1rem] px-2">
          <Image
            src="/resources/sash_pic_remove.png"
            width={30}
            height={30}
            alt="sash pic"
            className="w-full h-full object-cover"
            sizes="100vw"
            quality={90}
            priority
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2"></div>
    </section>
  );
};

export default Intro;
