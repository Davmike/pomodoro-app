import { useContext } from "react";
import { MyContext } from "./Context";

function Settings() {
  const context = useContext(MyContext);
  return (
    context?.menu && (
      <div className="flex justify-center items-center">
        <div className="w-[327px] h-[72px] bg-[white] flex justify-center items-center">
          <h1>hello</h1>
        </div>
      </div>
    )
  );
}

export default Settings;
