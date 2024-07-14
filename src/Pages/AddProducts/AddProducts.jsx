import InputShape from "./Form/InputShape";
import Label from "./Form/Label";

const AddProducts = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const brandName = e.target.name.value;
    const productName = e.target.productName.value;
    const imageLink = e.target.imgLink.value;
    const productType = e.target.productType.value;
    const userRating = e.target.rating.value;
    const productPrice = e.target.price.value;
    const shortDescription = e.target.shortDes.value;
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

    fetch("http://localhost:6500/addproducts", {
      method: "POST",
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

  return (
    <div className="py-10">
      <h1 className="text-center pt-10 font-bold text-5xl text-headerButton font-inter">
        Add Your Products Here
      </h1>
      <div className="flex justify-center py-10">
        <form
          className="md:w-9/12 lg:w-1/2 w-full mx-5 flex flex-col gap-6"
          onSubmit={handleForm}
        >
          <div className="flex md:flex-row flex-col md:gap-3 gap-6">
            <div className="relative flex-1">
              <InputShape name="name"></InputShape>
              <Label htmlFor="name">Brand Name</Label>
            </div>

            <div className="relative flex-1">
              <InputShape name="productName"></InputShape>
              <Label htmlFor="productName">Product Name</Label>
            </div>
          </div>

          <div className="relative flex-1">
            <InputShape name="imgLink"></InputShape>
            <Label htmlFor="imgLink">Image Link</Label>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-6">
            <div className="relative flex-1">
              <InputShape name="productType"></InputShape>
              <Label htmlFor="productType">Product Type</Label>
            </div>

            <div className="relative flex-1">
              <InputShape name="rating"></InputShape>
              <Label htmlFor="rating">Rating</Label>
            </div>
            <div className="relative flex-1">
              <InputShape name="price"></InputShape>
              <Label htmlFor="price">Price</Label>
            </div>
          </div>

          <div className="relative flex-1">
            <InputShape name="shortDes"></InputShape>
            <Label htmlFor="shortDes">Short Description</Label>
          </div>

          <button
            type="submit"
            className="py-3 rounded-lg bg-headerButton text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-center w-full cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
