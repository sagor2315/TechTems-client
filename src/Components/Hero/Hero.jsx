import slide2 from "../../assets/slider/450x350 pb img10.png";
import slide3 from "../../assets/slider/450x350 pb img11.png";
import slide4 from "../../assets/slider/450x350 pb img12.png";
import slide5 from "../../assets/slider/450x350 pb img13.png";
import slide6 from "../../assets/slider/450x350 pb img14.png";
import slide7 from "../../assets/slider/450x350 pb img15.png";
import slide8 from "../../assets/slider/450x350 pb img2.png";
import slide9 from "../../assets/slider/450x350 pb img3.png";
import slide12 from "../../assets/slider/450x350 pb img6.png";
import slide13 from "../../assets/slider/450x350 pb img7.png";
import slide14 from "../../assets/slider/450x350 pb img8.png";
import slide15 from "../../assets/slider/450x350 pb img9.png";

import heroImg5 from "../../assets/(12).png";
import heroImg6 from "../../assets/samsung.png";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Provider/DataProvider";
import ModeChangerButton from "../ModeChangerButton/ModeChangerButton";

const Hero = () => {
  const { mode } = useContext(DataContext);
  const images = [
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide12,
    slide13,
    slide14,
    slide15,
  ];
  const [presentIndex, setPresentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPresentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [presentIndex, images.length]);

  return (
    <div className="relative">
      <div className="pt-5 pb-10">
        <ModeChangerButton />
      </div>
      <div className="flex items-center">
        <div>
          <div className="flex flex-row justify-between items-center pt-3">
            <div className="md:block hidden w-full">
              <img className="" src={heroImg5} alt="" />
            </div>

            <div className=" max-w-md mx-auto relative overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${-presentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full"
                  />
                ))}
              </div>
            </div>

            <div className="md:block hidden w-full">
              <img className="" src={heroImg6} alt="" />
            </div>
          </div>

          <div className="">
            <h1
              className={`text-center ${
                mode ? "text-textPrimary" : " text-textSecondary"
              } font-bold lg:text-6xl md:text-4xl text-xl md:pt-2 pt-5`}
            >
              We Work With Those Who Are Ruling
            </h1>
            <div className="flex justify-center md:py-8 py-4">
              <button
                className={`bg-headerColor px-10 py-3 hover:bg-headerButton ${
                  mode ? "shadow shadow-black" : "shadow-md shadow-gray-950"
                } hover:duration-200 hover:transition-all hover:ease-linear rounded text-textPrimary text-xl font-semibold`}
              >
                Explore Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
