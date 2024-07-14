import { useContext } from "react";
import { DataContext } from "../../Provider/DataProvider";

const AreaServed = () => {
  const { mode } = useContext(DataContext);
  return (
    <div>
      <div className="py-5 relative px-8">
        <h1
          className={`text-3xl font-semibold border-b-2 ${
            mode
              ? "border-b-4 w-[240px] border-b-borderColor text-textPrimary"
              : "border-b-4 w-[240px] border-b-textSecondary text-textSecondary"
          }`}
        >
          Area We Served
        </h1>
        {mode ? (
          <div className="border absolute inset-x-8 px-8 top-[57px]"></div>
        ) : (
          <div className="border absolute border-textSecondary inset-x-8 px-8 top-[57px]"></div>
        )}
      </div>

      <div
        className={`grid md:grid-cols-4 grid-cols-2 gap-5 py-10 px-8 ${
          mode
            ? "text-textPrimary text-base font-semibold"
            : "text-textSecondary text-base font-semibold"
        }`}
      >
        <div
          className={`p-5 w-full rounded-lg ${
            mode
              ? "border-2 border-textPrimary"
              : "border-2 border-textSecondary"
          } text-center`}
        >
          <h1>United States</h1>
        </div>

        <div
          className={`p-5 w-full rounded-lg ${
            mode
              ? "border-2 border-textPrimary"
              : "border-2 border-textSecondary"
          } text-center`}
        >
          <h1>England</h1>
        </div>

        <div
          className={`p-5 w-full rounded-lg ${
            mode
              ? "border-2 border-textPrimary"
              : "border-2 border-textSecondary"
          } text-center`}
        >
          <h1>Germany</h1>
        </div>

        <div
          className={`p-5 w-full rounded-lg ${
            mode
              ? "border-2 border-textPrimary"
              : "border-2 border-textSecondary"
          } text-center`}
        >
          <h1>India</h1>
        </div>

        <div
          className={`p-5 w-full rounded-lg ${
            mode
              ? "border-2 border-textPrimary"
              : "border-2 border-textSecondary"
          } text-center`}
        >
          <h1>Brazil</h1>
        </div>

        <div
          className={`p-5 w-full rounded-lg ${
            mode
              ? "border-2 border-textPrimary"
              : "border-2 border-textSecondary"
          } text-center`}
        >
          <h1>Australia</h1>
        </div>

        <div
          className={`p-5 w-full rounded-lg ${
            mode
              ? "border-2 border-textPrimary"
              : "border-2 border-textSecondary"
          } text-center`}
        >
          <h1>Canada</h1>
        </div>

        <div
          className={`p-5 w-full rounded-lg ${
            mode
              ? "border-2 border-textPrimary"
              : "border-2 border-textSecondary"
          } text-center`}
        >
          <h1>South Africa</h1>
        </div>
      </div>
    </div>
  );
};

export default AreaServed;
