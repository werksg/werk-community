import React from "react";
import "../../app/page.css";

export default function Contact() {
  return (
    <div className="sm:m-6">
      <div>
        <h1 className="text-4xl font-bold text-center mt-8">Get in touch!</h1>
      </div>
      <div className="text-center mb-10">
        Contact us for help or join the team
      </div>
      <form
        className="rounded glass-back grid md:grid-cols-2 grid-cols-1 sm:m-6 min-h-[500px]"
        action={""}
        method="post"
      >
        <div className="flex flex-col">
          <div className="mx-6 mt-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              className="h-[50px] shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>

          <div className="mx-6 mt-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="h-[50px] shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>

          <div className="mx-6 mt-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="h-[50px] shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Phone no."
            />
          </div>
        </div>

        <div className="min-h-[200px]">
          <div className="m-6 h-3/4 flex flex-col">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="first"
            >
              Message
            </label>
            <div className="flex-grow">
              <textarea
                className="shadow appearance-none border rounded-lg w-full h-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                type="text"
                placeholder="Enquiry"
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-2 mx-auto mb-6 ">
          <button className="bg-cyan-700 hover:bg-cyan-900 font-bold py-2 px-4 rounded text-white ">
            Submit Enquiry
          </button>
        </div>
      </form>
    </div>
  );
}
