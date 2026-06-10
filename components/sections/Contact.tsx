import { Mails } from "lucide-react";
import Image from "next/image";
import React from "react";
import ShowModalBtn from "../sub/ShowModalBtn";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full my-5 py-5 px-4 border-zinc-950/10 border">
      <div className="w-full sm:w-[60vw] sm:mx-auto flex flex-col justify-center items-start gap-3">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-3xl font-brico my-5 text-center flex flex-col justify-center items-start space-y-2">
            <span className="text-start bg-clip-text font-bold text-transparent bg-linear-to-r from-zinc-950/70 via-[#222] to-zinc-950">Your Vision, My Creation.</span>{" "}
            <span className="text-start bg-clip-text font-bold text-transparent bg-linear-to-r from-zinc-950/70 via-[#222] to-zinc-950">Let's Bring It To Life.</span>
          </h2>
          
        </div>
        <div className="font-space flex flex-col space-y-3 items-start justify-center text-[#555] text-md w-[90%]">
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
        <div className="my-4 space-y-3 font-nunito">
          <p className="text-xl">
            <span className="font-bold text-[#333]">Looking For Something</span>{" "}
            <span className="italic text-[#444]">Unique?</span>
          </p>
          <p className="text-xl">
            <span className="font-bold text-[#333]">Feel Free To Share</span>{" "}
            <span className="italic text-[#444]">Your Ideas!</span>
          </p>
        </div>
        <div className="w-full font-space">
          <ShowModalBtn className="w-full bg-zinc-950 font-semibold text-white py-3 px-3 rounded-full flex justify-center items-center gap-3 cursor-pointer">
            <span>Drop me an email at engrmitchel@gmail.com</span>{" "}
            <span>
              <Mails />
            </span>
          </ShowModalBtn>
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
