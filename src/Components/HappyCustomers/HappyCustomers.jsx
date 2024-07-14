import { useContext, useState } from "react";
import { DataContext } from "../../Provider/DataProvider";

const HappyCustomers = () => {
  const { mode } = useContext(DataContext);

  const customerData = [
    {
      id: 1,
      name: "John Doe",
      img: "https://i.imgur.com/M7hnx17.png",
      review:
        "I had a great experience shopping on this website. The product selection is excellent, and the customer service was very helpful. Will definitely buy again!",
    },
    {
      id: 2,
      name: "Jane Smith",
      img: "https://i.imgur.com/ANSlCAR.png",
      review:
        "Impressive range of electronics! I bought a Lenovo laptop, and it exceeded my expectations. Fast delivery and a smooth shopping experience.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      img: "https://i.imgur.com/nm9TY76.png",
      review:
        "The Sony headphones I purchased are fantastic! The sound quality is superb, and the noise-canceling feature works like a charm. I'm a satisfied customer.",
    },
    {
      id: 4,
      name: "Sara Williams",
      img: "https://i.imgur.com/0emq9RP.png",
      review:
        "I'm loving my new Xiaomi smartwatch! It's stylish, and the fitness tracking features are helping me stay on top of my health goals. Great value for the price.",
    },
    {
      id: 5,
      name: "Chris Anderson",
      img: "https://i.imgur.com/qDfsE5i.png",
      review:
        "The Samsung tablet I purchased is perfect for both work and entertainment. The display is vibrant, and the S Pen is a fantastic addition. Couldn't be happier!",
    },
    {
      id: 6,
      name: "Emily Taylor",
      img: "https://i.imgur.com/5yad0C2.png",
      review:
        "The iPhone SE I bought from this website is amazing! It's powerful, and the camera quality is impressive. The checkout process was quick and easy. Thank you!",
    },
  ];

  const [customers, setCustomers] = useState();

  const handleCustomers = (id) => {
    const singleCustomers = customerData.find((data) => data.id === id);
    setCustomers(singleCustomers);
  };

  return (
    <div>
      <div className="md:py-5 py-6 relative px-8">
        <h1
          className={`md:text-3xl text-2xl font-semibold border-b-2 ${
            mode
              ? "border-b-4 md:w-[325px] w-[270px]  border-b-borderColor text-textPrimary"
              : "border-b-4 md:w-[325px] w-[270px] border-b-textSecondary text-textSecondary"
          }`}
        >
          Our Happy Customers
        </h1>
        {mode ? (
          <div className="border absolute inset-x-8 px-8 top-[57px]"></div>
        ) : (
          <div className="border absolute border-textSecondary inset-x-8 px-8 top-[57px]"></div>
        )}
      </div>

      <div className="pt-5">
        <div
          className={` lg:w-1/3 md:w-1/2  w-10/12 mx-auto p-3 rounded-lg ${
            mode
              ? "text-textPrimary shadow-lg shadow-gray-900 border-2"
              : "text-textSecondary shadow-lg shadow-gray-600 border-2 border-gray-300"
          }`}
        >
          <div className="w-1/4 mx-auto rounded-full">
            <img
              className="rounded-full"
              src={customers ? customers?.img : customerData[0].img}
              alt=""
            />
          </div>
          <h1 className="text-center py-2 text-lg font-medium">
            {customers ? customers?.name : customerData[0].name}{" "}
          </h1>
          <p className="text-center text-base">
            {customers ? customers?.review : customerData[0].review}{" "}
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-5 py-10">
          {customerData.map((data, idx) => (
            <div
              onClick={() => handleCustomers(data.id)}
              key={idx}
              className="cursor-pointer"
            >
              <div className="flex justify-center border w-26 h-26 rounded-full">
                <div>
                  <img
                    className="border w-24 h-24 rounded-full"
                    src={data.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
