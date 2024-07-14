import { useContext } from "react";
import { DataContext } from "../../Provider/DataProvider";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brands = ({ brandData }) => {
  const { mode } = useContext(DataContext);

  return (
    <div>
      <div className="py-5 relative px-8">
        <h1
          className={`text-3xl font-semibold border-b-2 ${
            mode
              ? "border-b-4 w-[94px] border-b-borderColor text-textPrimary"
              : "border-b-4 w-[94px] border-b-textSecondary text-textSecondary"
          }`}
        >
          Brands
        </h1>
        {mode ? (
          <div className="border absolute inset-x-8 px-8 top-[57px]"></div>
        ) : (
          <div className="border absolute border-textSecondary inset-x-8 px-8 top-[57px]"></div>
        )}
      </div>

      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  pb-10 px-8 text-textPrimary text-xl font-semibold">
          {brandData &&
            brandData.map((data, idx) => (
              <div key={idx}>
                <Link to={`/brands/${data.brandName}`}>
                  <div
                    className={`group hover:shadow-sm hover:shadow-blue-950 duration-500 ${
                      mode
                        ? "border-[0.5px] border-gray-800"
                        : "border-[0.5px] border-gray-300"
                    }`}
                  >
                    <div className=" hover:scale-125 duration-500 py-10">
                      <div className="flex justify-center">
                        <img
                          className="rounded-lg shadow-lg shadow-rose-950 mb-5"
                          src={data.brandImg}
                          alt=""
                        />
                      </div>
                      <h1 className="flex items-center justify-center ">
                        <span className="bg-textSecondary w-2/5 rounded flex items-center uppercase justify-center rotate-0 translate-y-0 transition-transform duration-500">
                          {data.brandName}
                        </span>
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

Brands.propTypes = {
  brandData: PropTypes.array,
};

export default Brands;
