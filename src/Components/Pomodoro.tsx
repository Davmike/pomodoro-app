import { useContext, useEffect, useState } from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Layout from "./Layout";
import { MyContext } from "./Context";

function Pomodoro() {
  const context = useContext(MyContext);
  const { pause, setPause }: any = context;
  const [timerValue, setTimerValue] = useState(900);

  useEffect(() => {
    let timerId: number;
    if (!pause) {
      timerId = setInterval(() => {
        setTimerValue((prevValue) => {
          if (prevValue > 0) {
            return prevValue - 1;
          } else {
            clearInterval(timerId);
            setPause(false);
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [pause, setPause]);

  const minutes = Math.floor(timerValue / 60);
  const seconds = timerValue % 60;

  const formattedTime = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

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
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgressbarWithChildren
                value={(timerValue / 900) * 100}
                text={formattedTime}
                className="custom-progress-bar"
              >
                <p
                  className="text-[#D7E0FF] text-[14px] font-bold md:text-[16px] cursor-pointer mt-[120px]"
                  onClick={() => setPause(!pause)}
                >
                  {pause ? "S T A R T" : "P A U S E"}
                </p>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
