import Mobile from "./assets/Mobile.jpg";
import Desktop from "./assets/Desktop.jpg";
import { useState } from "react";
import Success from "./components/Success";

function App() {
  const [showModal, setshowModal] = useState(false);

  const closeModal = () => setshowModal(false);

  return (
    <div className="min-h-screen flex flex-col bg-white sm:justify-center sm:items-center sm:bg-inherit ">
      <div className="flex flex-col bg-white sm:justify-center sm:items-center sm:rounded-3xl sm:flex-row-reverse sm:max-w-3xl sm:p-10">
        {/* image part */}
        <div className="sm:w-1/2">
          <img src={Mobile} className="sm:hidden" alt="/" />
          <img src={Desktop} alt="/" className="sm:block hidden" />
        </div>

        {/* Paragraph part */}
        <div className="p-7 w-[23rem]">
          <h2 className="font-bold text-4xl font-writing">Stay updated!</h2>
          <p className="font-semibold my-4">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="flex flex-col font-semibold">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <g fill="none">
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                  <path
                    stroke="#FFF"
                    stroke-width="2"
                    d="M6 11.381 8.735 14 15 8"
                  />
                </g>
              </svg>
              <p className="ml-10">
                {" "}
                Product discovery and building what matters
              </p>
            </div>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <g fill="none">
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                  <path
                    stroke="#FFF"
                    stroke-width="2"
                    d="M6 11.381 8.735 14 15 8"
                  />
                </g>
              </svg>{" "}
              <p className="ml-10">
                {" "}
                Measuring to ensure updates are a success
              </p>
            </div>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <g fill="none">
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                  <path
                    stroke="#FFF"
                    stroke-width="2"
                    d="M6 11.381 8.735 14 15 8"
                  />
                </g>
              </svg>{" "}
              <p className="ml-10">And much more!</p>
            </div>
          </div>
          <form action="" className="flex flex-col mt-10">
            <label className="font-bold text-sm">Email address</label>
            <input
              type="email"
              name="email"
              placeholder="email@company.com"
              className="p-5 border w-full rounded-md py-3 my-3"
            />
          </form>
          <button
            onClick={() => setshowModal(true)}
            className="bg-[#242742] text-white font-semibold py-3 rounded-md hover:bg-[#ff6257]  duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff6257] w-full"
          >
            Subscribe to monthly newsletter
          </button>
          {showModal && <Success closeModal={closeModal} />}
        </div>
      </div>
      <div className="p-2 font-extrabold sm:text-white flex flex-col justify-center items-center">

      <p>MADE BY </p><a href="https://www.linkedin.com/in/joyjeet-mukherjee-48b298206/" className="hover:text-[#ff6257]  duration-500 hover:scale-105 hover:shadow-2xl" target="_blank" rel="noreferrer">Joyjeet Mukherjee</a>
      </div>
    </div>
  );
}

export default App;
