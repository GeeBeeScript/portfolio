"use client"

import React from "react"

type props = {
    children: React.ReactNode,
    className: string,
    goTo: string,
}

const ScrollButton = ({className, goTo, children}: props) => {
  return (
    <button onClick={() => document.getElementById(`${goTo}`)?.scrollIntoView({behavior: "smooth"})} className={className}>{children}</button>
  )
}

export default ScrollButton