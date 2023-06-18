import React from "react";

const Success = ({ closeModal }) => {
  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 right-0 min-h-screen bg-white sm:bg-[#36384e] flex sm:justify-center sm:items-center">
        <div className="flex flex-col justify-between  w-[23rem] p-8 sm:bg-white rounded-2xl sm:p-11">
          <div className="mt-[5rem] sm:mt-0">
            <svg
            className="my-5 sm:my-0"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
            >
              <defs>
                <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stop-color="#FF6A3A" />
                  <stop offset="100%" stop-color="#FF527B" />
                </linearGradient>
              </defs>
              <g fill="none">
                <circle cx="32" cy="32" r="32" fill="url(#a)" />
                <path
                  stroke="#FFF"
                  stroke-width="4"
                  d="m18.286 34.686 8.334 7.98 19.094-18.285"
                />
              </g>
            </svg>
            <h1 className="text-4xl font-bold my-5">Thanks for subscribing!</h1>
            <p className="font-semibold">
              A confirmation email has been sent to
              <b className="font-bold"> ash@loremcompany.com</b>. Please
              open it and click the button inside to confirm your subscription.
            </p>
          </div>
          
            <button
              className="bg-[#242742] text-white font-semibold py-3 rounded-md hover:bg-[#ff6257] duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff6257] w-full mb-5 sm:mt-5 sm:mb-0"
              onClick={closeModal}
            >
              Dismiss message
            </button>
          
        </div>
      </div>
    </>
  );
};

export default Success;
