import React from "react";

const Hamburger = () => {
  return (
    <svg
      className="absolute right-0 mt-[15px] mr-[25px] hover:scale-125 duration-300 transition-transform"
      width="30"
      height="36"
      viewBox="0 0 30 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.85 21C16.2169 21 17.325 19.6569 17.325 18C17.325 16.3432 16.2169 15 14.85 15C13.4831 15 12.375 16.3432 12.375 18C12.375 19.6569 13.4831 21 14.85 21Z"
        fill="black"
        fill-opacity="0.49"
      />
      <path
        d="M14.85 10.5C16.2169 10.5 17.325 9.15685 17.325 7.5C17.325 5.84315 16.2169 4.5 14.85 4.5C13.4831 4.5 12.375 5.84315 12.375 7.5C12.375 9.15685 13.4831 10.5 14.85 10.5Z"
        fill="black"
        fill-opacity="0.49"
      />
      <path
        d="M14.85 31.5C16.2169 31.5 17.325 30.1569 17.325 28.5C17.325 26.8431 16.2169 25.5 14.85 25.5C13.4831 25.5 12.375 26.8431 12.375 28.5C12.375 30.1569 13.4831 31.5 14.85 31.5Z"
        fill="black"
        fill-opacity="0.49"
      />
    </svg>
  );
};

export default Hamburger;
