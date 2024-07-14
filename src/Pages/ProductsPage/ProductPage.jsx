// import { DataContext } from "../../Provider/DataProvider";

import { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const BrandProductsPage = () => {
  const loaderData = useLoaderData();
  const { id } = useParams();
  const [singleBrand, setSingleBrand] = useState();

  // const images = [1, 2, 3, 4];

  useEffect(() => {
    const singleBrandFinder = loaderData.filter(
      (data) => data.brandName === id
    );
    setSingleBrand(singleBrandFinder);
    console.log(singleBrandFinder);
  }, [id, loaderData]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="max-w-screen-2xl mx-auto bg-secondary">
      <div className=" py-10">
        <h1 className="text-center">Advertisement here</h1>
        <div className="max-w-xs mx-auto relative overflow-hidden border border-gray-300">
          <div
            className="flex transition-transform duration-500 ease-in-out "
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          >
            {singleBrand &&
              singleBrand.map((image, index) => (
                <img
                  key={index}
                  src={image.imageLink}
                  alt={`Image ${index + 1}`}
                  className="w-full "
                />
              ))}
          </div>
        </div>
      </div>

      <div>
        <div className="text-5xl font-bold text-center text-headerColor">
          Store
        </div>
        <div
          className={`${
            singleBrand && singleBrand.length === 0
              ? "grid:none h-[60vh] flex items-center"
              : "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-5 gap-1 "
          }`}
        >
          {singleBrand && singleBrand.length !== 0 ? (
            singleBrand.map((data, idx) => (
              <div
                key={idx}
                className=" border-2 flex flex-col bg-gray-100 hover:duration-300 p-5 rounded hover:shadow-md hover:shadow-primary"
              >
                <div className="flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h1 className="font-normal text-base text-gray-500">
                      {data.productType}
                    </h1>
                    <h1 className="pt-2 font-semibold text-lg text-gray-500">
                      {data.brandName}
                    </h1>
                    <h1 className="font-semibold text-lg text-gray-500 py-2 ">
                      {data.productName}
                    </h1>
                  </div>

                  <div className="hover:scale-110 hover:duration-500 hover:transition hover:ease-in-out">
                    <img className="" src={data.imageLink} alt="" />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex-grow">
                      <h1 className="font-semibold text-2xl text-gray-500 py-2">
                        ${data.productPrice}
                      </h1>
                      <div className="text-headerColor font-semibold py-3">
                        <span className="font-semibold text-lg">
                          User Rating:
                        </span>
                        <Rating
                          style={{ maxWidth: 140 }}
                          value={data.userRating}
                          readOnly
                        />
                        {/* {setRating({pd && pd.userRating})} */}
                      </div>
                    </div>

                    <h1 className="">{data.shortDescription.slice(0, 95)}</h1>
                  </div>
                </div>

                <div className="flex justify-center gap-5 pt-3">
                  <Link to={`/update/${data._id}`} className="flex-1">
                    <div>
                      <button className="bg-primary px-5 py-2 text-textPrimary w-full text-lg font-medium rounded">
                        Edit
                      </button>
                    </div>
                  </Link>
                  <Link to={`/productdetails/${data._id}`} className="flex-1">
                    <div className="flex-1">
                      <button className="bg-primary px-5 py-2 text-textPrimary w-full text-lg font-medium rounded">
                        Details
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center border">
              <h1 className="text-textSecondary font-bold md:text-5xl text-3xl pb-5">
                Out of stock. For this brand, we does not have any collections
                right now!
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandProductsPage;
