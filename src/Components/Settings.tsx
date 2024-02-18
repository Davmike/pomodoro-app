import { useContext } from "react";
import { MyContext } from "./Context";
import Close from "../../public/assets/icon-close.svg";
import arrowUp from "../../public/assets/icon-arrow-up.svg";
import arrowDown from "../../public/assets/icon-arrow-down.svg";
import check from "../../public/assets/icon-check.png";

function Settings() {
  const context = useContext(MyContext);
  return (
    context?.menu && (
      <>
        <div
          className="fixed inset-0 bg-black opacity-40"
          onClick={() => {
            context?.setMenu(!context?.menu);
          }}
        ></div>
        <div className="w-[327px] h-[549px] bg-[white] rounded-[15px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[540px] md:h-[464px]">
          <div className="flex justify-between items-center px-[24px] pt-[24px] pb-[28px]">
            <h1
              className={`text-[#1E213F] font-bold text-[20px] ${
                context?.font === 1
                  ? "font-KumbhSans"
                  : context?.font === 2
                  ? "font-RobotoSlab"
                  : "font-SpaceMono"
              }`}
            >
              Settings
            </h1>
            <img
              src={Close}
              alt=""
              className="cursor-pointer"
              onClick={() => context?.setMenu(!context?.menu)}
            />
          </div>
          <hr className="h-[1px] bg-[#e3e1e1]" />
          <h2 className="tetx-[#161932] text-[11px] font-bold tracking-[4px] flex justify-center mt-[24px] md:justify-start md:ml-[27px]">
            TIME (MINUTES)
          </h2>
          <div>
            <div className="flex flex-col gap-[8px] w-[100%] md:flex-row">
              <div className="flex items-center justify-between w-[100%] px-[24px] mt-[18px] md:flex-col  md:px-[0px]">
                <p
                  className={`text-[12px] text-[#1E213F] opacity-40 md:mr-[70px] ${
                    context?.font == 1
                      ? "font-KumbhSans"
                      : context?.font == 2
                      ? "font-RobotoSlab"
                      : "SpaceMono"
                  }  font-bold `}
                >
                  pomodoro
                </p>
                <div className="flex items-center justify-between w-[140px] h-[40px] px-[16px] py-[12px] bg-[#EFF1FA] rounded-[10px]">
                  <input
                    className={`text-[#1E213F] text-[14px]  ${
                      context?.font == 1
                        ? "font-KumbhSans"
                        : context?.font == 2
                        ? "font-RobotoSlab"
                        : "font-SpaceMono"
                    }  font-bold w-[30px] h-[20px] bg-transparent focus:outline-none`}
                    type="number"
                    name="number"
                    id="number"
                    value={context?.pomodoro}
                    onChange={(e) =>
                      context?.setPomodoro(Number(e.target.value))
                    }
                  />
                  <div className="flex flex-col h-[20px] justify-between">
                    <img
                      src={arrowUp}
                      className="cursor-pointer"
                      onClick={() => {
                        const newValue = context?.pomodoro + 1;
                        context?.setPomodoro(newValue);
                        context?.setTimerValue(newValue * 60);
                      }}
                    />
                    <img
                      src={arrowDown}
                      className="cursor-pointer"
                      onClick={() => {
                        const newValue = context?.pomodoro - 1;
                        context?.setPomodoro(newValue);
                        context?.setTimerValue(newValue * 60);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-[100%] px-[24px] mt-[18px] md:flex-col md:px-[0px]">
                <p
                  className={`text-[12px] text-[#1E213F] opacity-40 md:mr-[70px] ${
                    context?.font == 1
                      ? "font-KumbhSans"
                      : context?.font == 2
                      ? "font-RobotoSlab"
                      : "SpaceMono"
                  }  font-bold `}
                >
                  short break
                </p>
                <div className="flex items-center justify-between w-[140px] h-[40px] px-[16px] py-[12px] bg-[#EFF1FA] rounded-[10px]">
                  <input
                    className={`text-[#1E213F] text-[14px]  ${
                      context?.font == 1
                        ? "font-KumbhSans"
                        : context?.font == 2
                        ? "font-RobotoSlab"
                        : "SpaceMono"
                    }  font-bold w-[30px] h-[20px] bg-transparent focus:outline-none`}
                    type="number"
                    name="number"
                    id="number"
                    value={context?.short}
                    onChange={(e) => context?.setShort(Number(e.target.value))}
                  />
                  <div className="flex flex-col h-[20px] justify-between">
                    <img
                      src={arrowUp}
                      className="cursor-pointer"
                      onClick={() => {
                        const newShortValue = context?.short + 1;
                        context?.setShort(newShortValue);
                        context?.setShortTimerValue(newShortValue * 60);
                      }}
                    />
                    <img
                      src={arrowDown}
                      className="cursor-pointer"
                      onClick={() => {
                        const newShortValue = context?.short - 1;
                        context?.setShort(newShortValue);
                        context?.setShortTimerValue(newShortValue * 60);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-[100%] px-[24px] mt-[18px] md:flex-col  md:px-[0px]">
                <p
                  className={`text-[12px] text-[#1E213F] opacity-40 md:mr-[70px] ${
                    context?.font == 1
                      ? "font-KumbhSans"
                      : context?.font == 2
                      ? "font-RobotoSlab"
                      : "SpaceMono"
                  }  font-bold `}
                >
                  long break
                </p>
                <div className="flex items-center justify-between w-[140px] h-[40px] px-[16px] py-[12px] bg-[#EFF1FA] rounded-[10px]">
                  <input
                    className={`text-[#1E213F] text-[14px]  ${
                      context?.font == 1
                        ? "font-KumbhSans"
                        : context?.font == 2
                        ? "font-RobotoSlab"
                        : "SpaceMono"
                    }  font-bold w-[30px] h-[20px] bg-transparent focus:outline-none`}
                    type="number"
                    name="number"
                    id="number"
                    value={context?.long}
                    onChange={(e) => context?.setLong(Number(e.target.value))}
                  />
                  <div className="flex flex-col h-[20px] justify-between">
                    <img
                      src={arrowUp}
                      className="cursor-pointer"
                      onClick={() => {
                        const newValue = context?.long + 1;
                        context?.setLong(newValue);
                        context?.setLongTimerValue(newValue * 60);
                      }}
                    />
                    <img
                      src={arrowDown}
                      className="cursor-pointer"
                      onClick={() => {
                        const newValue = context?.long - 1;
                        context?.setLong(newValue);
                        context?.setLongTimerValue(newValue * 60);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[18px] border-b border-b-solid border-b-[#E3E1E1] md:flex-row md:justify-between md:mt-[24px] md:pb-[24px] md:px-[24px]">
            <h2 className="text-[11px] text-[#161932] font-kumbhSans font-bold tracking-[4.231px] mt-[24px] md:m-0">
              FONT
            </h2>
            <div className="flex justify-between w-[152px] mb-[24px] md:m-0">
              <button
                className={`w-[40px] h-[40px] text-center text-[15px] ${
                  context?.font == 1
                    ? "text-[#FFF]"
                    : "text-[#1E213F] text-opacity-70"
                } font-kumbhSans font-bold ${
                  context?.font == 1 ? "bg-[#161932]" : "bg-[#EFF1FA]"
                } rounded-[50%]`}
                onClick={() => context?.setFont(1)}
              >
                Aa
              </button>
              <button
                className={`w-[40px] h-[40px] text-center text-[15px]  ${
                  context?.font == 2
                    ? "text-[#FFF]"
                    : "text-[#1E213F] text-opacity-70"
                } font-RobotoSlab font-bold  ${
                  context?.font == 2 ? "bg-[#161932]" : "bg-[#EFF1FA]"
                }  rounded-[50%]`}
                onClick={() => context?.setFont(2)}
              >
                Aa
              </button>
              <button
                className={`w-[40px] h-[40px] text-center text-[15px]  ${
                  context?.font == 3
                    ? "text-[#FFF]"
                    : "text-[#1E213F] text-opacity-70"
                } font-SpaceMono font-bold ${
                  context?.font == 3 ? "bg-[#161932]" : "bg-[#EFF1FA]"
                } rounded-[50%]`}
                onClick={() => context?.setFont(3)}
              >
                Aa
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center w-[100%] gap-[18px] md:flex-row md:justify-between md:mt-[24px] md:mb-[30px] md:px-[24px]">
            <h2 className="text-[11px] text-[#161932] font-kumbhSans font-bold tracking-[4.231px] mt-[16px] md:m-0">
              COLOR
            </h2>
            <div className="flex justify-between w-[152px] mb-[24px] md:m-0">
              <button
                className={`flex justify-center items-center w-[40px] h-[40px] text-center text-[15px] font-kumbhSans font-bold bg-[#F87070] rounded-[50%]`}
                onClick={() => context?.setColor(1)}
              >
                <img
                  className={`${
                    context?.color != 1 ? "hidden" : null
                  } w-[20px]`}
                  src={check}
                />
              </button>
              <button
                className={`flex justify-center items-center w-[40px] h-[40px] text-center text-[15px] font-kumbhSans font-bold bg-[#70F3F8] rounded-[50%]`}
                onClick={() => context?.setColor(2)}
              >
                <img
                  className={`${
                    context?.color != 2 ? "hidden" : null
                  } w-[20px]`}
                  src={check}
                />
              </button>
              <button
                className={`flex justify-center items-center w-[40px] h-[40px] text-center text-[15px] font-kumbhSans font-bold bg-[#D881F8] rounded-[50%]`}
                onClick={() => context?.setColor(3)}
              >
                <img
                  className={`${
                    context?.color != 3 ? "hidden" : null
                  } w-[20px]`}
                  src={check}
                />
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Settings;
