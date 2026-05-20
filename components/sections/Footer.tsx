import { Sparkle } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='relative w-full'>
        <div>
            <div>
            <div><span>Thanks</span> <span><Sparkle /></span></div>
            <div>For Viewing</div>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>

        <div className="absolute w-5 h-5 top-0 left-0 border-t-2 border-l-2"></div>
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2"></div>
    </footer>
  )
}

export default Footer