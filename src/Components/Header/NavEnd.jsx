import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
// import logo from "../../assets/we";
import user from "../../assets/New folder/user (3).png";
import PropTypes from "prop-types";

const NavEnd = ({
  handleCartIcon,
  clicked,
  remainingData,
  userData,
  handleLogOut,
}) => {
  return (
    <div>
      <div className="md:block hidden">
        <ul className="flex items-center gap-5 md:text-xs lg:text-xl font-medium text-textPrimary">
          <div className="flex gap-2 items-center">
            <h1>Cart</h1>
            <div className="relative">
              <FaCartPlus
                onClick={handleCartIcon}
                className="lg:text-[28px] md:text-[17px] text-textPrimary cursor-pointer"
              />
              <div className="absolute bg-textPrimary lg:w-4 lg:h-4 md:w-[10px] md:h-[10px] rounded -top-[2px] -right-[9px] text-textSecondary flex items-center justify-center lg:text-xs md:text-[8px]">
                {remainingData.length}
              </div>

              <div
                className={`absolute bg-headerColor p-3 w-60 flex flex-col items-center gap-2 -right-20 overflow-y-scroll ${
                  clicked ? "" : "hidden"
                }`}
              >
                {remainingData.map((data, idx) => (
                  <div key={idx} className="">
                    <Link to="/cartdetails">
                      <div className="flex items-center gap-3 ">
                        <li className="text-sm w-1/4">
                          <img src={data.imageLink} alt="" />
                        </li>
                        <li className="text-sm">{data.productName}</li>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {userData ? (
            <>
              <li>
                <h1>{userData.displayName}</h1>
              </li>
              <li>
                <div className="lg:w-10 lg:h-10 md:w-8 md:h-8 rounded-full ">
                  <img
                    referrerPolicy="no-referrer"
                    className="rounded-full"
                    src={userData?.photoURL || user}
                    alt=""
                  />
                </div>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  <div>
                    <button
                      onClick={handleLogOut}
                      className="lg:px-6 md:px-4 py-2 bg-headerButton rounded-sm md:text-xs lg:text-lg"
                    >
                      Log Out
                    </button>
                  </div>
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                <div>
                  <button className="px-6 py-2 bg-headerButton rounded-sm">
                    Login
                  </button>
                </div>
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

NavEnd.propTypes = {
  cartsData: PropTypes.array,
  remainingData: PropTypes.array,
  userData: PropTypes.object,
  handleLogOut: PropTypes.func,
  handleCartIcon: PropTypes.func.isRequired,
  clicked: PropTypes.bool.isRequired,
};

export default NavEnd;
