"use client";

import React from "react";
import { Transition } from "@headlessui/react";
import Question from "./QuestionSvg";

export default function SingleFaq(props) {
  const [click, setClick] = React.useState(false);
  function handleClick() {
    setClick(!click);
    console.log(props);
  }

  const svgStyle = {
    transform: click ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease", // Add a transition for smooth movement
  };

  return (
    <div className="border-b h-fit my-6 mr-6">
      <button
        className="flex flex-row justify-center justify-between h-full w-full items-center"
        onClick={handleClick}
      >
        <div className="my-3 mr-2 text-left flex flex-row font-bold">
          <Question></Question>
          {props.title}
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 "
            style={svgStyle}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>
      <Transition
        show={click}
        enter="transition-opacity duration-400 transform ease-in-out"
        enterFrom="opacity-0 translate-y-[100%]"
        enterTo="opacity-100 translate-y-0"
        leave="transition-opacity duration-300 transform ease-in-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="my-3 faq-list"
          dangerouslySetInnerHTML={{ __html: props.message }}
        ></div>
      </Transition>
    </div>
  );
}
