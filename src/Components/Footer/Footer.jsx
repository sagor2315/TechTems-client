import { NavLink } from "react-router-dom";
import logo from "../../assets/website logo.png";

const Footer = () => {
  return (
    <div className="text-center bg-headerColor py-5 text-textPrimary">
      <div className="flex justify-center">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          <ul className="flex gap-2 items-center ">
            <li>
              <div className="lg:w-10 lg:h-10 w-8 h-8">
                <img src={logo} alt="" />
              </div>
            </li>

            <li>
              <h1 className="lg:text-2xl md:text-lg font-bold">
                <span className="text-[#FBE8A6]">Tech</span>
                <span className="text-[#D1FDFE]">Tems</span>
              </h1>
            </li>
          </ul>
        </NavLink>
      </div>
      <div>&copy; All right reserved by TechTems 2023</div>
    </div>
  );
};

export default Footer;
