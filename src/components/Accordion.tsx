import React, { useState } from "react"
import UpIcon from "./Icons/up-icon"
interface AccordionProps {
  title: string
  children: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="border shadow rounded-md overflow-hidden">
      <button
        className="flex justify-between items-center px-4 py-2 bg-transparent text-gray-800 w-full"
        onClick={toggleAccordion}
      >
        <span className="font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">{title}</span>
        <span
          className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <UpIcon />
        </span>
      </button>
      <div
        className={`overflow-scroll transition-max-height duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
        style={{ maxHeight: isOpen ? "none" : 0 }}
      >
        <div className="px-4 py-2">{children}</div>
      </div>
    </div>
  )
}

export default Accordion
