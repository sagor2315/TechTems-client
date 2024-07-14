import { useContext } from "react";
import { DataContext } from "../../Provider/DataProvider";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const ModeChangerButton = () => {
  const { mode, handleMode } = useContext(DataContext);

  return (
    <div>
      <div className="flex justify-center inset-x-0 fixed z-10">
        <div>
          <input
            type="checkbox"
            name="check"
            id="toggle"
            className="hidden"
            checked={mode}
            onChange={handleMode}
          />
          <label htmlFor="toggle">
            <div className="relative bg-headerButton rounded-full drop-shadow-xl w-20 h-10">
              <div
                className={`absolute w-10 h-10  transform flex items-center justify-center ${
                  mode
                    ? "translate-x-full bg-[#FBE8A6] rounded-full  duration-500"
                    : "-translate-x-0 bg-primary rounded-full  duration-500"
                }`}
              >
                {mode ? (
                  <MdOutlineLightMode className="h-7 w-7 text-primary" />
                ) : (
                  <MdDarkMode className="h-10 w-10 text-[#FBE8A6]" />
                )}
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ModeChangerButton;
