import React, { useState } from "react";

function Header() {
  const [selectedOption, setSelectedOption] = useState("pomodoro");

  const handleButtonClick = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
  };

  return (
    <header className="flex flex-col items-center gap-[45px]">
      <h1 className="text-[#D7E0FF] mt-[32px] text-[24px] font-bold">
        pomodoro
      </h1>

      <div className="bg-[#161932] rounded-[50px] flex justify-between items-center w-[327px] h-[63px]">
        <button
          className="bg-[#4D5FE2] rounded-[50px] px-4 py-2 text-white"
          onClick={() => handleButtonClick("pomodoro")}
        >
          Pomodoro
        </button>
        <button
          className="bg-[#4D5FE2] rounded-[50px] px-4 py-2 text-white"
          onClick={() => handleButtonClick("short break")}
        >
          Short Break
        </button>
        <button
          className="bg-[#4D5FE2] rounded-[50px] px-4 py-2 text-white"
          onClick={() => handleButtonClick("long break")}
        >
          Long Break
        </button>
        <p className="text-[#D7E0FF] opacity-50">{selectedOption}</p>
      </div>
      <div className={`w-[105.2px] h-[48px] rounded-[26.5px]`}></div>
    </header>
  );
}

export default Header;
