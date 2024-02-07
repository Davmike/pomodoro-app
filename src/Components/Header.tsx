function Header() {
  return (
    <header className="flex flex-col items-center gap-[45px]">
      <h1 className="text-[#D7E0FF] mt-[32px] text-[24px] font-bold">
        pomodoro
      </h1>
      <div className="bg-[#161932] rounded-[50px] flex justify-evenly items-center w-[327px] h-[63px]">
        <p className="text-[#D7E0FF] opacity-50">pomodoro</p>
        <p className="text-[#D7E0FF] opacity-50">short break</p>
        <p className="text-[#D7E0FF] opacity-50">long break</p>
      </div>
    </header>
  );
}

export default Header;
