import { useContext } from "react";
import Hero from "../../Components/Hero/Hero";

import { DataContext } from "../../Provider/DataProvider";
import Brands from "../../Components/Brands/Brands";
import { useLoaderData } from "react-router-dom";
import HappyCustomers from "../../Components/HappyCustomers/HappyCustomers";
import AreaServed from "../../Components/AreaServed/AreaServed";

const Home = () => {
  const brandData = useLoaderData();
  const { mode } = useContext(DataContext);
  return (
    <div
      className={`max-w-screen-2xl mx-auto ${
        mode ? "bg-primary" : "bg-secondary"
      } `}
    >
      <Hero />
      <Brands brandData={brandData} />
      <HappyCustomers />
      <AreaServed />
    </div>
  );
};

export default Home;
