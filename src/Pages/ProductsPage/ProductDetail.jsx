import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { DataContext } from "../../Provider/DataProvider";
import Swal from "sweetalert2";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductDetail = () => {
  const [pd, setPd] = useState();
  const productLoaderData = useLoaderData();
  const { id } = useParams();
  const { fetchData } = useContext(DataContext);

  // const [rating, setRating] = useState();

  const handleCartData = (pd) => {
    const pdWithoutId = { ...pd, _id: undefined };
    console.log(pdWithoutId);

    Swal.fire({
      title: "Do you Add?",
      text: "If yes then click yes or cancel it!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:6500/carts", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(pdWithoutId),
        })
          .then((res) => {
            if (res.status === 400) {
              throw new Error("Duplicate _id. Choose a different _id.");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            // console.log("Something is wrong");
            Swal.fire({
              title: "Added!",
              text: "Your product has been added.",
              icon: "success",
            });
            // Ensure that the fetchData function is called to update the cart data
            fetchData();
          })
          .catch((error) => {
            console.error("Error:", error.message);
          });
      }
    });
  };

  useEffect(() => {
    const productDetailsData = productLoaderData.find(
      (data) => data._id === id
    );
    setPd(productDetailsData);
  }, [id, productLoaderData]);

  return (
    <div className="flex md:flex-row flex-col gap-10 p-5">
      <div className="flex-1 w-10/12 mx-auto">
        <img className="w-full" src={pd && pd.imageLink} alt="" />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-semibold text-headerColor">
          {pd && pd.productName}
        </h1>
        <h1 className="text-xl font-bold pb-2 pt-4 text-headerColor">
          ${pd && pd.productPrice}
        </h1>
        <h1 className="text-headerColor font-semibold">
          <span className="font-semibold text-lg">Brand:</span>{" "}
          {pd && pd.brandName}
        </h1>
        <h1 className="text-headerColor font-semibold py-2">
          <span className="font-semibold text-lg">Brand Type:</span>{" "}
          {pd && pd.productType}
        </h1>
        <div className="text-headerColor font-semibold">
          <span className="font-semibold text-lg">User Rating:</span>
          <Rating
            style={{ maxWidth: 180 }}
            value={pd && pd.userRating}
            readOnly
          />
          {/* {setRating({pd && pd.userRating})} */}
        </div>

        <h1 className="pt-2 text-headerColor text-base font-inter">
          Details:{pd && pd.shortDescription}
        </h1>
        <div className="pt-5">
          <div>
            <button
              onClick={() => handleCartData(pd)}
              className="px-10 py-3 rounded bg-primary text-textPrimary font-medium text-lg"
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
