"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

type props = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal = ({ isOpen, onClose }: props) => {
  useEffect(() => {
  if (isOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return () => document.body.classList.remove("overflow-hidden");
}, [isOpen]);
  const onEmailSubmit = () => {
    const mailSubject = encodeURIComponent(`Interested in your Services`);
    const mailBody = encodeURIComponent(
      `Hi,
        
        My name is {kindly add your name} and I am interested in the service of
        {kindly add the service you are interested in}
        `,
    );

    const mailToLink = `mailto:engrmitchel@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    window.location.href = mailToLink;
  };
  return (
    <section
      className={`fixed inset-0 z-50 w-screen h-screen bg-zinc-950/70 flex justify-center items-center font-semibold transition-all duration-200 ease-in
    ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-6 pointer-events-none"}
    `}
    >
      <div className="bg-white rounded-md px-4 py-3 w-[90%] max-w-lg flex flex-col gap-3">
        <div className="w-full flex justify-between items-center text-zinc-950 mb-3">
          <h1 className="text-lg">Reach Out</h1>
          <div className="cursor-pointer">
            <X onClick={onClose} className="size-7 hover:text-zinc-900/50 transition-all duration-75 ease-in-out" />
          </div>
        </div>
        <div className="w-full">
          <button
            onClick={onEmailSubmit}
            className="w-full bg-zinc-950 text-white py-3 px-3 rounded-3xl shadow-lg shadow-zinc-600/10 hover:bg-zinc-950/70 transition-all duration-100 ease-in cursor-pointer"
          >
            Send Me an Email
          </button>
        </div>
        <p className="text-[#444] w-full mt-2">Alternatively,</p>
        <form className="">
          <div className="">
            <input
              type="text"
              placeholder="E-mail address"
              className="my-2 border-b w-full text-[1.1rem] py-2 px-2"
            />
            <button onClick={onClose} className="py-3 px-3 bg-zinc-950 text-white w-full rounded-xl my-3 hover:bg-zinc-950/90 transition-all duration-100 ease-in cursor-pointer">
              Add your E-mail and I'll get in contact
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactModal;
