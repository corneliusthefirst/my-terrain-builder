import React, { useRef, useState } from "react"
import UpIcon from "../icons/up-icon"
interface AccordionProps {
  title: string
  children: React.ReactNode
  length: number
}

const Accordion: React.FC<AccordionProps> = ({ title, children, length }) => {
  const [isOpen, setIsOpen] = useState(false)
  const accordionRef = useRef<HTMLDivElement>(null)
  const toggleAccordion = () => {
    setIsOpen(!isOpen)
    length > 15 && accordionRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }

  return (
    <div className="border shadow rounded-md overflow-hidden my-4 md:my-0">
      <button
        className="flex justify-between items-center px-4 py-2 bg-transparent text-gray-800 w-full"
        onClick={toggleAccordion}
      >
        <span className="font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          {title}
        </span>
        <span
          className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <UpIcon />
        </span>
      </button>
      <div
        className={`overflow-scroll scroll-smooth scroll-pl-1 snap-y transition-max-height duration-300 ${isOpen ? "max-h-[320px] md:max-h-[480px]" : "max-h-0"}`}
      >
        <div ref={accordionRef} className="px-4 py-2">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion
