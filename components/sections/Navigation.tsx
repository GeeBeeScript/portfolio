import { ClipboardList, House, Sun } from 'lucide-react'
import Image from 'next/image'

const Navigation = () => {
  return (
    <nav className='my-5 font-hanken max-sm:w-full mx-auto bg-gray-50/50 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] text-[#444] max-w-lg flex justify-between item-center py-3 px-4 rounded-full cursor-pointer'>
        <div className='flex gap-2 justify-around items-center px-2 border-r-zinc-800/10 border-r'>
            <span className='sm:block hidden'>Home</span> <span><House className='size-5 sm:size-7'/></span>
        </div>
        <div className='flex justify-center items-center px-3 border-r-zinc-800/10 border-r'>
            <Image src="/resources/x.svg" width={10} height={10} alt='X logo' className='w-5 h-5'/>
        </div>
        <div className='flex justify-around items-center px-3 border-r-zinc-800/10 border-r'>
            <Image src="/resources/linkedin-svg.svg" width={10} height={10} alt='X logo' className='w-5 h-5' />
        </div>
        <div className='flex justify-around items-center px-3 border-r-zinc-800/10 border-r'><ClipboardList className='size-5 sm:size-7'/></div>
        <div className='flex justify-around items-center px-3 border-r-zinc-800/10 border-r'><Sun className='size-5 sm:size-7'/></div>
        <div className='flex justify-around items-center px-3 '>
            <button className='font-space text-[0.5rem] sm:text-[1rem] font-semibold bg-zinc-950 text-white px-4 py-2 rounded-4xl hover:shadow-lg hover:bg-zinc-950/90 transition-all duration-500 cursor-pointer'>Get in Touch</button>
        </div>
    </nav>
  )
}

export default Navigation