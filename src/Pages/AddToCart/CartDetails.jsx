import { useContext } from "react";
import { GiCrossedSabres } from "react-icons/gi";
import { Link } from "react-router-dom";

import { DataContext } from "../../Provider/DataProvider";

const CartDetails = () => {
  const { handleDelete, remainingData } = useContext(DataContext);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="text-center text-3xl font-bold lg:py-10 md:py-7 py-5 text-textSecondary">
        My Cart
      </div>

      <div className="p-5 rounded">
        <table className="md:w-9/12 w-full mx-auto rounded">
          <thead>
            <tr className="bg-headerButton md:text-base text-xs font-medium text-textPrimary">
              <th className="p-3 md:w-1/12"> </th>
              <th className="p-3 md:w-1/12">Image</th>
              <th className="p-3 md:w-1/4">Brand</th>
              <th className="p-3 md:w-1/4">Name</th>
              <th className="p-3 md:w-1/4">Price</th>
            </tr>
          </thead>
          <tbody>
            {remainingData &&
              remainingData.map((data, idx) => (
                <tr
                  key={idx}
                  className="text-center border-t border-textSecondary md:text-base text-xs font-medium text-textSecondary"
                >
                  <td className="p-3 md:w-1/12 cursor-pointer">
                    <Link
                      onClick={() => {
                        handleDelete(data._id);
                      }}
                    >
                      <GiCrossedSabres />
                    </Link>
                  </td>
                  <td className="p-3 md:w-1/12">
                    <img
                      className="lg:w-full md:w-full w-9/12"
                      src={data.imageLink}
                      alt=""
                    />
                  </td>
                  <td className="p-3 md:w-1/4">{data.brandName}</td>
                  <td className="p-3 md:w-1/4">{data.productName}</td>
                  <td className="p-3 md:w-1/4">${data.productPrice}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartDetails;
