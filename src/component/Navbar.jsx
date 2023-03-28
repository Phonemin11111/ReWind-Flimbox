import React, { useState } from "react";
import "../style/darktoggle.css";

const Navbar = () => {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <div class={`${darkToggle && "dark"}`}>
      <nav className=" flex flex-col md:flex-row bg-gradient-to-b from-transparent to-black dark:bg-white text-white dark:text-black shadow-xl shadow-black leading-none ">
        <div className=" container mx-auto flex">
          <div className=" flex items-center mx-5 py-5 md:py-0">
            <svg
              className="fill-current inline-block"
              width="34"
              height="34"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <h1 className="text-2xl ml-2 inline-block dark:text-black">
              Brand
            </h1>
          </div>
          <div className="md:flex md:flex-grow">
            <ul className="text-lg md:flex md:ml-auto ">
              <li>
                <a
                  className="w-full md:w-auto p-5 inline-block text-[16px] hover:bg-[url('./images/Planetone.png')] hover:bg-contain hover:bg-center hover:bg-no-repeat"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="w-full md:w-auto p-5 inline-block text-[16px] hover:bg-[url('./images/Planetone.png')] hover:bg-contain hover:bg-center hover:bg-no-repeat"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="w-full md:w-auto p-5 inline-block text-[16px] hover:bg-[url('./images/Planetone.png')] hover:bg-contain hover:bg-center hover:bg-no-repeat"
                  href="#"
                >
                  Genres
                </a>
              </li>
              <li>
                <a
                  className="w-full md:w-auto p-5 inline-block text-[16px] hover:bg-[url('./images/Planetone.png')] hover:bg-contain hover:bg-center hover:bg-no-repeat"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <label class="toggleDarkBtn">
              <input
                type="checkbox"
                onClick={() => setDarkToggle(!darkToggle)}
              />
              <span class="slideBtnTg round"></span>
            </label>
          </div>
        </div>
      </nav>
    </div>
    // </nav>
  );
};

export default Navbar;
