"use client"

import { MonitorSmartphone, MoveUpRight, Sparkle } from "lucide-react";
import React, { useState } from "react";

const OFFERS = [
  {
    id: "WAD",
    title: "Web Application Development",
    comment: "End-to-end development of powerful, scalable web applications built to handle complexity, perform flawlessly, and support real business growth.",
    serviceDetails: [
      "Full-stack architecture and development",
      "Scalable, high-performance builds",
      "Clean, maintainable code",
      "Responsive across all devices",
      "Built for long-term growth"
    ],
  },
  {
    id: "WD",
    title: "Website Design",
    comment: "Custom UI design for web and mobile experiences that feel refined, intuitive, and built to convert visitors into customers.",
    serviceDetails: [
      "Tailored UI/UX design",
      "Web and mobile-ready layouts",
      "Modern, polished visuals",
      "Conversion-focused structure",
      "Designed for clarity and trust"
    ],
  },
  {
    id: "BED",
    title: "Backend Development",
    comment: "High-performance backend systems engineered for speed, reliability, and cost efficiency without wasting resources or budget.",
    serviceDetails: [
      "Efficient backend architecture",
      "Secure API and database design",
      "Optimized for performance and cost",
      "Scalable systems built to last",
      "Reliable infrastructure support"
    ],
  },
  {
    id: "FBWD",
    title: "Full Branding & Web Development",
    comment: "From idea to launch, build a brand, platform, and growth engine with cohesive design, development, and marketing execution.",
    serviceDetails: [
      "Brand identity and logo creation",
      "UI mockups and product design",
      "Full application and dashboard development",
      "Ad platform setup and growth support",
      "Built to launch, scale, and profit"
    ],
  },
  {
    id: "SDD",
    title: "SaaS / Dashboard Development",
    comment: "Powerful SaaS products and dashboards designed to simplify complex workflows, deliver insight, and scale with your users.",
    serviceDetails: [
      "SaaS platform development",
      "Custom admin and analytics dashboards",
      "Role-based functionality",
      "Clean, data-focused interfaces",
      "Built for performance and scale"
    ],
  },
];


const OfferSection = () => {
  const [selection, setSelection] = useState<string | null>("WAD")
  const selectionIsActive = "bg-zinc-950 text-white px-6 py-3"
  const selectionInActive = "text-zinc-950 bg-gray-300"
  const selectedOffer = OFFERS.filter(offer => offer.id === selection)

  
  return (
    <section className="relative py-5 px-5 border-zinc-950/10 border">
      <div className="w-full flex flex-col space-y-5 justify-center items-center">
        <h2 className="text-3xl font-brico mb-4 w-full font-bold text-transparent bg-clip-text bg-linear-to-r from-zinc-950/70 via-[#222] to-zinc-950 text-center">
          What I can offer you!
        </h2>
        <div className="font-space flex space-x-2 space-y-3 max-w-2xl flex-wrap justify-center">
          <div onClick={() => setSelection(null)} className={`${!selection ? selectionIsActive : selectionInActive } px-5 py-3 rounded-3xl font-semibold  tracking-wide flex justify-center items-center cursor-pointer`}>
            All <span className={`${!selection ? "pl-2" : "hidden"}`}><Sparkle /></span>
          </div>
          <div onClick={() => setSelection("WAD")} className={`${selection === "WAD" ? selectionIsActive : selectionInActive } px-5 py-3 rounded-3xl font-semibold  tracking-wide flex justify-center items-center cursor-pointer`}>
            Web Application Development <span className={`${selection === "WAD" ? "pl-2" : "hidden"}`}><Sparkle /></span>
          </div>
          <div onClick={() => setSelection("WD")} className={`${selection === "WD" ? selectionIsActive : selectionInActive } px-5 py-3 rounded-3xl font-semibold  tracking-wide flex justify-center items-center cursor-pointer`}>
            Website Design <span className={`${selection === "WD" ? "pl-2" : "hidden"}`}><Sparkle /></span>
          </div>
          <div onClick={() => setSelection("BED")} className={`${selection === "BED" ? selectionIsActive : selectionInActive } px-5 py-3 rounded-3xl font-semibold  tracking-wide flex justify-center items-center cursor-pointer`}>
            Back-end Development <span className={`${selection === "BED" ? "pl-2" : "hidden"}`}><Sparkle /></span>
          </div>
          <div onClick={() => setSelection("FBWD")} className={`${selection === "FBWD" ? selectionIsActive : selectionInActive } px-5 py-3 rounded-3xl font-semibold  tracking-wide flex justify-center items-center cursor-pointer`}>
            Full Branding & Web Development <span className={`${selection === "FBWD" ? "pl-2" : "hidden"}`}><Sparkle /></span>
          </div>
          <div onClick={() => setSelection("SDD")} className={`${selection === "SDD" ? selectionIsActive : selectionInActive } px-5 py-3 rounded-3xl font-semibold  tracking-wide flex justify-center items-center cursor-pointer`}>
            SAAS / Dashboard Development<span className={`${selection === "SDD" ? "pl-2" : "hidden"}`}><Sparkle /></span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1 space-y-4">
          {!selection ? (OFFERS.map((offer, index) => (
            <div key={index} className="bg-gray-300 rounded-lg flex flex-col justify-center items-start space-y-2 py-4 px-3 border-zinc-950/10 border">
            <div>
              <MonitorSmartphone className="size-8 sm:size-9"/>
            </div>
            <div className="font-hanken text-xl font-bold text-zinc-900/80">{offer.title}</div>
            <div className="text-sm font-nunito text-zinc-900/60 leading-4 max-w-[90%] mr-auto">
              {offer.comment}
            </div>
            <div className="w-full my-2">
              <button className="bg-zinc-950 flex space-x-1 justify-center items-center font-semibold underline underline-offset-5 w-[90%] mr-auto py-3 px-3 rounded-3xl text-white"><span>Contact Me</span><span><MoveUpRight /></span></button>
            </div>
            <div className="flex font-space flex-col space-y-3 max-w-[80%] text-md text-zinc-950/70">
              {
                offer.serviceDetails.map((service, index) => (
                  <p key={index}>{service}</p>
                ))
              }
            </div>
          </div>

          ))) : (selectedOffer.map((offer, index) => (
            <div key={index} className="bg-gray-300 rounded-lg flex flex-col justify-center items-start space-y-2 py-4 px-3 border-zinc-950/10 border">
            <div>
              <MonitorSmartphone className="size-8 sm:size-9"/>
            </div>
            <div className="font-hanken text-xl font-bold text-zinc-900/80">{offer.title}</div>
            <div className="text-sm font-nunito text-zinc-900/60 leading-4 max-w-[90%] mr-auto">
              {offer.comment}
            </div>
            <div className="w-full bg-orange-400 my-2">
              <button className="bg-zinc-950 flex space-x-1 justify-center items-center font-semibold underline underline-offset-5 w-[90%] mr-auto py-3 px-3 rounded-3xl text-white"><span>Contact Me</span><span><MoveUpRight /></span></button>
            </div>
            <div className="flex font-space flex-col space-y-3 max-w-[80%] text-md text-zinc-950/70">
              {
                offer.serviceDetails.map((service, index) => (
                  <p key={index}>{service}</p>
                ))
              }
            </div>
          </div>

          )))}

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
