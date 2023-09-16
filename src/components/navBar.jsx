// eslint-disable-next-line no-unused-vars
import React from "react";

const navBar = () => {
  return (
    <div className="h-14 shadow-lg flex items-center justify-between px-14 text-black text-base font-sans font-medium leading-6 tracking-tighter">
      <div className="flex  gap-8 items-center justify-start">
        <img
          className="w-[71px] h-[71px] flex-shrink-0 hover:cursor-pointer"
          src="/src/assets/Logo_Cozmek_Black.png"
          alt="COZMEK"
        />
        <div>
          <a href="/">Contact</a>
        </div>
        <div>
          <a href="/">About</a>
        </div>
        <div>
          <a href="/">Register</a>
        </div>
      </div>
      <div>
        <h1>Welcome You !...</h1>
      </div>
    </div>
  );
};

export default navBar;
