import { useState } from "react"

export default function FaqAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="border-t-2 border-[#2C2C33]">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b-2 border-[#2C2C33]"
          data-aos="fade-up" data-aos-delay={index * 150}
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-[15px] md:p-[17px] gap-[15px]"
          >
            <span className="text-[18px] leading-[26px] text-white text-start">
              {item.question}
            </span>
            <span
              className="text-[20px] text-white"
            >
              {activeIndex === index ? "-" : "+"}
            </span>
          </button>
          <div
            className={`grid transition-all duration-300 ${
              activeIndex === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-[15px] md:px-[17px] pb-5 pt-0 text-sm">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}