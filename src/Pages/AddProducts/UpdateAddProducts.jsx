import { useLoaderData } from "react-router-dom";
// import InputShape from "./Form/InputShape";
import Label from "./Form/Label";

const UpdateAddProducts = () => {
  const loaderData = useLoaderData();
  //   const { id } = useParams();
  console.log(loaderData._id);

  const handleUpdate = (e) => {
    e.preventDefault();
    const brandName = e.target.brandName.value;
    const productName = e.target.productName.value;
    const imageLink = e.target.imageLink.value;
    const productType = e.target.productType.value;
    const userRating = e.target.userRating.value;
    const productPrice = e.target.productPrice.value;
    const shortDescription = e.target.shortDescription.value;

    const allProductInfo = {
      brandName,
      productName,
      imageLink,
      productType,
      userRating,
      productPrice,
      shortDescription,
    };

    console.log(allProductInfo);

    fetch(`http://localhost:6500/addproducts/${loaderData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allProductInfo),
    })
      .then((res) => res.json())
      .then((error) => {
        console.log(error);
      });
  };

  //   const handleUpdate = async (e) => {
  //     e.preventDefault();

  //     const brandName = e.target.brandName.value;
  //     const productName = e.target.productName.value;
  //     const imageLink = e.target.imageLink.value;
  //     const productType = e.target.productType.value;
  //     const userRating = e.target.userRating.value;
  //     const productPrice = e.target.productPrice.value;
  //     const shortDescription = e.target.shortDescription.value;

  //     const allProductInfo = {
  //       brandName,
  //       productName,
  //       imageLink,
  //       productType,
  //       userRating,
  //       productPrice,
  //       shortDescription,
  //     };

  //     try {
  //       const response = await fetch(
  //         `http://localhost:6500/addproducts/${loaderData._id}`,
  //         {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(allProductInfo),
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Update failed");
  //       }

  //       const data = await response.json();
  //       console.log(data); // Log the response for debugging purposes
  //     } catch (error) {
  //       console.error("Update error:", error);
  //       // Handle error, show a message, or perform other actions as needed
  //     }
  //   };

  return (
    <div className="py-10">
      <h1 className="text-center pt-10 font-bold text-5xl text-headerButton font-inter">
        Add Your Products Here
      </h1>
      <div className="flex justify-center py-10">
        <form
          className="md:w-9/12 lg:w-1/2 w-full mx-5 flex flex-col gap-6"
          onSubmit={handleUpdate}
        >
          <div className="flex md:flex-row flex-col md:gap-3 gap-6">
            <div className="relative flex-1">
              <input
                type="text"
                defaultValue={loaderData.brandName}
                name="brandName"
                className="peer h-10 pl-2 w-full border rounded-lg border-headerButton text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
                placeholder=" "
              />
              <Label htmlFor="name">Brand Name</Label>
            </div>

            <div className="relative flex-1">
              <input
                type="text"
                defaultValue={loaderData.productName}
                name="productName"
                className="peer h-10 pl-2 w-full border rounded-lg border-headerButton text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
                placeholder=" "
              />
              <Label htmlFor="productName">Product Name</Label>
            </div>
          </div>

          <div className="relative flex-1">
            <input
              type="text"
              defaultValue={loaderData.imageLink}
              name="imageLink"
              className="peer h-10 pl-2 w-full border rounded-lg border-headerButton text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
              placeholder=" "
            />
            <Label htmlFor="imgLink">Image Link</Label>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-6">
            <div className="relative flex-1">
              <input
                type="text"
                defaultValue={loaderData.productType}
                name="productType"
                className="peer h-10 pl-2 w-full border rounded-lg border-headerButton text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
                placeholder=" "
              />
              <Label htmlFor="productType">Product Type</Label>
            </div>

            <div className="relative flex-1">
              <input
                type="text"
                defaultValue={loaderData.userRating}
                name="userRating"
                className="peer h-10 pl-2 w-full border rounded-lg border-headerButton text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
                placeholder=" "
              />
              <Label htmlFor="rating">Rating</Label>
            </div>
            <div className="relative flex-1">
              <input
                type="text"
                defaultValue={loaderData.productPrice}
                name="productPrice"
                className="peer h-10 pl-2 w-full border rounded-lg border-headerButton text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
                placeholder=" "
              />
              <Label htmlFor="price">Price</Label>
            </div>
          </div>

          <div className="relative flex-1">
            <input
              type="text"
              defaultValue={loaderData.shortDescription}
              name="shortDescription"
              className="peer h-10 pl-2 w-full border rounded-lg border-headerButton text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
              placeholder=" "
            />
            <Label htmlFor="shortDes">Short Description</Label>
          </div>

          <button
            type="submit"
            className="py-3 rounded-lg bg-headerButton text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-center w-full cursor-pointer"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateAddProducts;
