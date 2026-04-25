import { div } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'

const firstImgArr = [
  {
    src: "/resources/react.svg",
    text: "React.js"
  },
  {
    src: "/resources/tailwind.svg",
    text: "Tailwind CSS"
  },
  {
    src: "/resources/next.svg",
    text: "Next.js"
  },
  {
    src: "/resources/prisma.svg",
    text: "Prisma"
  },
  {
    src: "/resources/javascript.svg",
    text: "Javascript"
  },
  {
    src: "/resources/node-js.svg",
    text: "Node.js"
  },
  {
    src: "/resources/mongodb.svg",
    text: "MongoDB"
  },
  {
    src: "/resources/html.svg",
    text: "HTML"
  },
  {
    src: "/resources/css3.svg",
    text: "CSS"
  },
]

const secondImgArr = [
  {
    src: "/resources/python.svg",
    text: "Python"
  },
  {
    src: "/resources/django.svg",
    text: "Django"
  },
  {
    src: "/resources/typescript.svg",
    text: "Typescript"
  },
  {
    src: "/resources/fastapi.svg",
    text: "FastAPI"
  },
  {
    src: "/resources/material-ui.svg",
    text: "Material UI"
  },
]

const Stack = () => {
  return (
    <section className='relative w-full my-5 py-5 px-4 flex flex-col justify-center items-center border border-zinc-950/10'>
        <div className='space-y-3 w-full'>
          <h2 className="text-3xl mb-4 w-full font-bold text-transparent bg-clip-text bg-linear-to-r from-zinc-950/70 via-[#222] to-zinc-950 text-center">Technologies Used</h2>

            <div className='w-full space-y-4 mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
  [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
                <div className='mb-3 animate-scroll-left will-change-transform flex gap-4 sm:gap-7 items-center py-3 sm:py-4 px-2 group'>
                  {[...firstImgArr, ...firstImgArr].map((item, index) => (
                    <div key={index} className='flex shrink-0 w-max items-center gap-2 text-xl text-[#555] group-hover:[animation-play-state:paused]'>
                      <Image src={item.src} alt='slider_one' width={10} height={10} className='w-10 h-10'/>
                      <div>{item.text}</div>
                    </div>
                  ))}
                </div>
                <div className='mb-3 animate-scroll-right will-change-transform flex gap-4 sm:gap-7 items-center py-3 sm:py-4 px-2 group'>
                  {[...secondImgArr, ...secondImgArr].map((item, index) => (
                    <div key={index} className='flex shrink-0 w-max items-center gap-2 text-xl text-[#555] group-hover:[animation-play-state:paused]'>
                      <Image src={item.src} alt='slider_one' width={10} height={10} className='w-10 h-10'/>
                      <div>{item.text}</div>
                    </div>
                  ))}
                </div>
            </div>
        </div>

        <div className='absolute w-5 h-5 top-0 left-0 border-t-2 border-l-2'></div>
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2"></div>
    </section>
  )
}

export default Stack