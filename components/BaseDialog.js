import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";

export default function BaseDialog(props) {
  const { show, onClose } = props;

  let [isOpen, setIsOpen] = useState(show);

  function handleClick() {
    
    setIsOpen(false);
    onClose(false); // Invoke the callback function to update the prop value
  }

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        onClose(false); // Invoke the callback function to update the prop value
      }}
      className="relative z-50 h-full"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center lg:px-[100px] lg:pb-[100px] lg:pt-[70px] p-1">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto rounded bg-white w-screen">
          <Dialog.Title className="relative">
  <div className="flex justify-end absolute top-0 right-0">
    <button onClick={handleClick} className="z-40 sm:mr-4 sm:mt-4 mr-2 mt-2">
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
        className="w-6 h-6"
      >
        <line x1="18" x2="6" y1="6" y2="18"></line>
        <line x1="6" x2="18" y1="6" y2="18"></line>
      </svg>
    </button>
  </div>
  <video className="w-full aspect-video promo-video rounded" autoPlay controls>
    <source src="/PromotionVideo.mp4" type="video/mp4" />
  </video>
</Dialog.Title>

            <Dialog.Description>
              
            </Dialog.Description>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
