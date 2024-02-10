import React, { useContext, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Layout from "./Layout";
import { MyContext } from "./Context";

function Pomodoro() {
  const context = useContext(MyContext);
  const { pomodoro, setPomodoro }: any = context;

  useEffect(() => {
    setTimeout(() => {
      if (pomodoro < 100) {
        setPomodoro(pomodoro + 1);
      }
    }, 50);
  }, [pomodoro]);

  return (
    <div>
      <Layout />
      <div className="flex justify-center items-center">
        <div
          style={{
            background: "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)",
            boxShadow:
              "50px 50px 100px 0px #121530, -50px -50px 100px 0px #272C5A",
          }}
          className="w-[300px] h-[300px] rounded-[50%] flex items-center justify-center mt-[48px] mb-[79px]"
        >
          <div className="w-[268px] h-[268px] rounded-[50%] bg-[#161932] flex flex-col justify-center items-center">
            <h2 className="text-[80px] md:text-[100px] text-[#D7E0FF] font-bold">
              17:59
            </h2>
            <p className="text-[#D7E0FF] text-[14px] font-bold md:text-[16px]">
              P A U S E
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
