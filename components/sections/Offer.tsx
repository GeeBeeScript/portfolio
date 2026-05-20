import { MonitorSmartphone, MoveUpRight } from "lucide-react";
import React from "react";

const OFFERS = [
  {
    title: "Full-stack Web App Development",
    comment: "Build a fast, modern, and fully responsive web application that not only looks great but helps you attract users, streamline operations, and grow your business online.",
    serviceDetails: ["Complete Full-stack development (Front-end + Back-end)", "UI/UX Design & Development", "Clear communication and guided support", "Quick Delivery", "Desktop, Tablet And Mobile Version"],
  },
  {
    title: "Full-stack Web App Development",
    comment: "Build a fast, modern, and fully responsive web application that not only looks great but helps you attract users, streamline operations, and grow your business online.",
    serviceDetails: ["Complete Full-stack development (Front-end + Back-end)", "UI/UX Design & Development", "Clear communication and guided support", "Quick Delivery", "Desktop, Tablet And Mobile Version"],
  },
]

const OfferSection = () => {
  return (
    <section className="relative py-5 px-5 border-zinc-950/10 border">
      <div className="w-full bg-blue-300 flex flex-col space-y-5 justify-center items-center">
        <h2 className="text-3xl mb-4 w-full font-bold text-transparent bg-clip-text bg-linear-to-r from-zinc-950/70 via-[#222] to-zinc-950 text-center">
          What I can offer you!
        </h2>
        <div className="flex space-x-2 space-y-3 max-w-2xl bg-green-300 flex-wrap justify-center">
          <div className="px-5 py-3 rounded-3xl bg-gray-300 font-semibold text-zinc-950 tracking-wide flex justify-center items-center">
            All
          </div>
          <div className="px-5 py-3 rounded-3xl bg-gray-300 font-semibold text-zinc-950 tracking-wide flex justify-center items-center">
            Web Application Development
          </div>
          <div className="px-5 py-3 rounded-3xl bg-gray-300 font-semibold text-zinc-950 tracking-wide flex justify-center items-center">
            Website Design
          </div>
          <div className="px-5 py-3 rounded-3xl bg-gray-300 font-semibold text-zinc-950 tracking-wide flex justify-center items-center">
            Back-end Development
          </div>
          <div className="px-5 py-3 rounded-3xl bg-gray-300 font-semibold text-zinc-950 tracking-wide flex justify-center items-center">
            Full Branding & Web Development
          </div>
          <div className="px-5 py-3 rounded-3xl bg-gray-300 font-semibold text-zinc-950 tracking-wide flex justify-center items-center">
            SAAS / Dashboard Development
          </div>
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 space-y-4">
          {OFFERS.map((offer) => (
            <div className="bg-gray-300 rounded-lg flex flex-col justify-center items-start space-y-2 py-4 px-3 border-zinc-950/10 border">
            <div>
              <MonitorSmartphone className="size-8 sm:size-9"/>
            </div>
            <div className="text-xl font-bold text-zinc-900/80">{offer.title}</div>
            <div className="text-sm text-zinc-900/60 leading-4 max-w-[90%] mr-auto">
              {offer.comment}
            </div>
            <div className="w-full bg-orange-400 my-2">
              <button className="bg-zinc-950 flex space-x-1 justify-center items-center font-semibold underline underline-offset-5 w-[90%] mr-auto py-3 px-3 rounded-3xl text-white"><span>Contact Me</span><span><MoveUpRight /></span></button>
            </div>
            <div className="flex flex-col space-y-3 max-w-[80%] text-md text-zinc-950/70">
              {
                offer.serviceDetails.map((service) => (
                  <p>{service}</p>
                ))
              }
            </div>
          </div>

          ))}

        </div>
      </div>

      <div className="absolute w-5 h-5 top-0 left-0 border-t-2 border-l-2"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2"></div>
    </section>
  );
};

export default OfferSection;
