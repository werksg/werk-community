"use client";
import Image from "next/image";
import React from "react";
import BaseDialog from './BaseDialog';
import { useEffect } from "react";

export default function Banner() {
  const [dialog,setDialog]=React.useState(false)
  
  useEffect(() => {
    
  }, [dialog]);

  function handleClick(){
    setDialog(!dialog)
    

  }

  function handleClosePopup(value) {
    setDialog(value); // Update the `show` prop value
  }

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 md:mb-1 md:h-full">
      <BaseDialog show={dialog} onClose={handleClosePopup}/>
      <div className="flex flex-row items-center justify-between md:order-last">
        <img
          className="w-3/4 h-3/4 mx-auto"
          src="https://download.werk.sg/assets/werkApp-321478e1.svg"
          alt="werkApp"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">Download Werk Now!</h1>
        </div>
        <div>
          Our powerful platform offers swift and seamless access for potential
          employers to engage with you, giving you the freedom to showcase your
          skills and expertise with ease.
        </div>
        <div className="mt-4 mb-3">
          Simply list the services you wish to provide, and let the magic of
          Werk do the rest! We&apos;re committed to helping you find your dream job
          and making the employment journey a seamless and enjoyable one.
        </div>

        <button className="flex flex-row items-center w-[120px]" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-6 h-6 mr-3"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="10 8 16 12 10 16 10 8"></polygon>
          </svg>
          <span className="hover:underline">Play Video</span>
        </button>

        <div className="flex flex-col md:flex-row space-y-2 md:space-x-3 md:space-y-0 mt-6">
          <div className="w-40 bg-black rounded-md p-1 hover:scale-110">
            <a href="https://apps.apple.com/sg/app/werk-sg/id6445880985">
              <img
                className="object-cover"
                src="https://insta-werk-app.s3.ap-northeast-1.amazonaws.com/apple_store-button.png"
                alt="apple"
                
              />
            </a>
          </div>
          <div className="w-40 bg-black rounded-md p-1 hover:scale-110">
            <a href="https://play.google.com/store/apps/details?id=com.werkapp">
              <img
                className="object-cover"
                src="https://insta-werk-app.s3.ap-northeast-1.amazonaws.com/google-play-button.png"
                alt="google"
                
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
