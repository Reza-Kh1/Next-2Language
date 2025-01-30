"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
const dataAccordion = [
  {
    num: 1,
    name: "What services does SquareUp provide?",
    text: "SquareUp offers a range of services including design, engineering,and project management. We specialize in user experience design,web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    num: 2,
    name: "How can SquareUp help my business?",
    text: "SquareUp offers a range of services including design, engineering,and project management. We specialize in user",
  },
  {
    num: 3,
    name: "What industries does SquareUp work with?",
    text: " ex? Suscipit culpa repellat totam doloribus est natus possimus reiciendis temporibus ipsum ratione.",
  },
  {
    num: 4,
    name: "How long does it take to complete a project with SquareUp?",
    text: " ex? Suscipit culpa repellat totam doloribus est natus possimus reiciendis temporibus ipsum ratione.",
  },
];
const data2 = [
  {
    num: 5,
    name: "Do you offer ongoing support and completed?",
    text: "r adipisicing elit. Debitis ad dolor aut, cumque cum quaerat enim! Perferendis, ex? ",
  },
  {
    num: 6,
    name: "Can you work with existing design or development frameworks?",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad dolor aut, cumque cum quaerat enim!",
  },
  {
    num: 7,
    name: "How involved will I be in the project development process?",
    text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad dolor aut, cumque cum quaerat enim! Perferendis, ex? Suscipit culpa repellat totam doloribus est natus possimus",
  },
  {
    num: 8,
    name: "Can you help with website or app maintenance and updates?",
    text: " adipisicing elit. Debitis ad dolor aut, cumque cum quaerat enim! Perferendis, ex? Suscipit culpa repellat totam doloribus",
  },
];
const AccordionBox: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [openItem2, setOpenItem2] = useState<number | null>(null);

  const handleToggle = (key: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === key ? null : key));
  };
  const handleToggle2 = (key: number) => {
    setOpenItem2((prevOpenItem) => (prevOpenItem === key ? null : key));
  };
  return (
    <div className="flex items-start gap-10">
      <Accordion className="flex flex-wrap p-0">
        {data2.map((item, index) => (
          <AccordionItem
            className={`${index + 1 === data2.length ? "" : "border-b"} border-b-d-60 w-full py-3`}
            key={item.num}
            aria-label={item.name}
            textValue={item.name}
            title={<span className="text-white text-sm md:text-base">{item.name}</span>}
            indicator={() =>
              openItem === item.num ? (
                <i className="p-3 rounded-full bg-d-80 flex items-center justify-center">
                  <FaMinus className="text-w-100" size={15} />
                </i>
              ) : (
                <i className="p-3 rounded-full bg-d-80 flex items-center justify-center">
                  <FaPlus className="text-w-100" size={15} />
                </i>
              )
            }
            onPress={() => handleToggle(item.num)}
          >
            <p className="text-gray-400 text-xs md:text-base">{item.text}</p>
          </AccordionItem>
        ))}
      </Accordion>
      <Accordion className="hidden md:flex flex-wrap p-0">
        {dataAccordion.map((item, index) => (
          <AccordionItem
            className={`${index + 1 === dataAccordion.length ? "" : "border-b"} border-b-d-60 w-full py-3`}
            key={item.num}
            aria-label={item.name}
            textValue={item.name}
            title={<span className="text-white">{item.name}</span>}
            indicator={() =>
              openItem2 === item.num ? (
                <i className="p-3 rounded-full bg-d-80 flex items-center justify-center">
                  <FaMinus className="text-w-100" size={15} />
                </i>
              ) : (
                <i className="p-3 rounded-full bg-d-80 flex items-center justify-center">
                  <FaPlus className="text-w-100" size={15} />
                </i>
              )
            }
            onClick={() => handleToggle2(item.num)}
          >
            <p className="text-gray-400">{item.text}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionBox;