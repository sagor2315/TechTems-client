import { NavLink } from "react-router-dom";

const NavMiddle = () => {
  return (
    <div>
      <ul className="md:flex md:gap-5 md:text-xs lg:text-xl font-medium text-textPrimary hidden">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive
                ? "active border-b-2 border-b-textPrimary duration-500"
                : isPending
                ? "pending"
                : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/addproducts"
            className={({ isActive, isPending }) =>
              isActive
                ? "active border-b-2 border-b-textPrimary duration-500"
                : isPending
                ? "pending"
                : ""
            }
          >
            Add Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMiddle;
