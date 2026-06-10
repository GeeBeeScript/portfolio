"use client"

import React, { useState } from "react"
import ContactModal from "../sections/ContactModal"

type props = {
    children: React.ReactNode,
    className: string,
}

const ShowModalBtn = ({ className, children }: props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onModalClose = () => setIsOpen(false)
    const onModalOpen = () => setIsOpen(true)
  return (
    <>
    <button onClick={onModalOpen} className={className}>{children}</button>
    <ContactModal isOpen={isOpen} onClose={onModalClose}/>
    </>
  )
}

export default ShowModalBtn