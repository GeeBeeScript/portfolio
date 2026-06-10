import { CircleUserRound, Dot } from "lucide-react";
import Image from "next/image";
import React from "react";
import ScrollButton from "../sub/ScrollButton";
import ShowModalBtn from "../sub/ShowModalBtn";

const Intro = () => {

  return (
    <section className="max-w-[1350px] mx-auto relative flex py-5 px-4 justify-center items-center border border-zinc-950/10">
      <div className="flex justify-between items-center max-sm:min-h-[60vh]">
        <div className="w-full sm:w-[50%] space-y-2">
          <div className="px-1 py-1 text-sm rounded-[3rem] w-50 bg-green-500/60 text-green-900 font-semibold">
            <div className="flex justify-center items-center">
              <Dot size={10} className="w-4 h-4 stroke-9 p-0 m-0 block" />
              <p className="font-hanken">Available for Freelance</p>
            </div>
          </div>
          <div className="max-sm:flex max-sm:gap- max-sm:flex-wrap max-sm:justify-between max-sm:items-center">
            <h1 className="text-4xl max-sm:w-full max-sm:text-wrap sm:text-[2.5rem] sm:my-2 font-bold font-brico text-transparent bg-clip-text bg-gradient-to-r from-zinc-950/70 via-[#222] to-zinc-950">
              Developing Web Applications That Make Profit
            </h1>

            <div className="w-[80%] h-full sm:hidden bg-zinc-400 rounded-[1rem] px-2 my-3">
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
          <p className="text-[#444] font-nunito sm:my-5">
            I’m Mitchel - a full-stack developer with over five years of
            experience building reliable, fast web applications from idea to
            launch. I focus on writing clean, maintainable code and creating
            smooth, intuitive user experiences across both frontend and backend.
          </p>
          <div className="flex items-center space-x-2 font-space font-semibold mt-5">
            <ShowModalBtn className="flex space-x-2 items-center cursor-pointer rounded-[2rem] bg-zinc-950 text-white px-3 py-2 text-sm hover:bg-zinc-900/80 hover:rounded-2xl transition-all duration-100 ease-in-out">
              <span>Book a Call</span>{" "}
              <span>
                <CircleUserRound className="text-white" />
              </span>
            </ShowModalBtn>
            <ScrollButton goTo="portfolio" className="flex space-x-2 items-center cursor-pointer rounded-[2rem] bg-white text-zinc-950 px-3 py-2 text-sm hover:bg-white/50 hover:rounded-2xl transition-all duration-100 ease-in-out">View Portfolio</ScrollButton>
            
          </div>
          <div></div>
        </div>
        <div className="hidden sm:block sm:w-[30%] bg-zinc-400 rounded-[1rem] px-2">
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
