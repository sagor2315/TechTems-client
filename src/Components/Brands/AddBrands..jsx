const AddBrands = () => {
  const handleAddBrands = (e) => {
    e.preventDefault();
    const brandName = e.target.name.value;
    const brandImg = e.target.imageLink.value;
    const brandData = { brandName, brandImg };
    console.log("Add Brands", brandName, brandImg);
    console.log(brandData);

    fetch("http://localhost:6500/brands", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandData),
    })
      .then((res) => res.json())
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-3xl pt-10">
        Add The Details
      </h1>
      <div className="flex justify-center pb-20 pt-10">
        <form className="w-1/2 flex flex-col gap-6" onSubmit={handleAddBrands}>
          <div className="relative">
            <input
              type="text"
              name="name"
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-3.5 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm"
            >
              Brand name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="imageLink"
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-3.5 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm"
            >
              Photo url
            </label>
          </div>

          {
            <button
              type="submit"
              className="py-3 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-center w-full cursor-pointer"
            >
              Submit
            </button>
          }
        </form>
      </div>
    </div>
  );
};

export default AddBrands;
