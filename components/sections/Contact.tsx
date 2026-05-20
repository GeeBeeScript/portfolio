import { Mails } from "lucide-react";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="relative w-full my-5 py-5 px-4 border-zinc-950/10 border">
      <div className="w-full sm:w-[60vw] sm:mx-auto flex flex-col justify-center items-start gap-3 bg-blue-200">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-3xl my-5 text-center flex flex-col justify-center items-start space-y-2">
            <span className="bg-clip-text font-bold text-transparent bg-linear-to-r from-zinc-950/70 via-[#222] to-zinc-950">Your Vision, My Creation</span>{" "}
            <span className="bg-clip-text font-bold text-transparent bg-linear-to-r from-zinc-950/70 via-[#222] to-zinc-950">Let's Bring It To Life</span>
          </h2>
          <div className="bg-black relative w-15 h-15 sm:w-30 sm:h-30 flex justify-center items-center rounded-full">
            <Image src="/resources/sash_pic_remove.png" alt="My image" width={50} height={50} className="h-full w-auto rounded-full"/>
            <div className="absolute top-0 left-0 w-full rounded-full bg-gray-400/">enw</div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 items-start justify-center text-[#555] text-md w-[90%]">
          <p>
            You need more than just a website. You need a digital experience
            that performs.
          </p>
          <p>
            I build fast, modern, high-performing web applications designed to
            help brands stand out and grow. Clean code, sharp design, and
            reliable development tailored to your vision.
          </p>
          <p>If you can envision it, I can build it.</p>
        </div>
        <div className="my-4 space-y-3">
          <p className="text-xl">
            <span className="font-bold text-[#333]">Looking For Something</span>{" "}
            <span className="italic text-[#444]">Unique?</span>
          </p>
          <p className="text-xl">
            <span className="font-bold text-[#333]">Feel Free To Share</span>{" "}
            <span className="italic text-[#444]">Your Ideas!</span>
          </p>
        </div>
        <div className="w-full">
          <button className="w-full bg-zinc-950 font-semibold text-white py-3 px-3 rounded-full flex justify-center items-center gap-3">
            <span>Drop me an email at engrmitchel@gmail.com</span>{" "}
            <span>
              <Mails />
            </span>
          </button>
        </div>
      </div>

      <div className="absolute w-5 h-5 top-0 left-0 border-t-2 border-l-2"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2"></div>
    </section>
  );
};

export default Contact;
