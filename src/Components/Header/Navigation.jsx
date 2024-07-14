import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { GiCrossedSabres } from "react-icons/gi";
import { SlMenu } from "react-icons/sl";
import logo from "../../assets/website logo.png";
import NavMiddle from "./NavMiddle";
import NavEnd from "./NavEnd";
import { useContext, useState } from "react";
import { DataContext } from "../../Provider/DataProvider";
import userCartData from "../../Provider/CustomHook/CustomHook";
import PropTypes from "prop-types";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Navigation = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { remainingData } = useContext(DataContext);

  const { userData, LogOut } = useContext(AuthContext);
  const { cartsData } = userCartData();

  const handleMenu = () => {
    setIsClicked(!isClicked);
  };

  const handleCartIcon = () => {
    setClicked(!clicked);
  };

  const handleLogOut = () => {
    LogOut()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div>
      <div className="flex justify-between gap-10 items-center font-inter bg-headerColor py-2 px-8 md:sticky shadow-sm shadow-textSecondary relative">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          <ul className="flex gap-2 items-center ">
            <li>
              <div className="lg:w-16 lg:h-16 w-8 h-8">
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

        <NavMiddle />

        <div className="">
          <div className="md:hidden text-textPrimary text-xl z-10">
            {isClicked ? (
              <GiCrossedSabres onClick={handleMenu} />
            ) : (
              <SlMenu onClick={handleMenu} />
            )}

            <div
              className={`md:block overflow-scroll ${
                isClicked
                  ? "transform inset-x-0 top-[50px] duration-500"
                  : "inset-x-0 -top-80 duration-500"
              }  bg-headerColor absolute z-10`}
            >
              <ul className="md:flex flex flex-col items-center gap-5 md:text-lg lg:text-xl font-medium text-textPrimary ">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addproducts"
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    Add Products
                  </NavLink>
                </li>
              </ul>

              <ul className="flex flex-col px-10 py-5 items-center gap-5 md:text-lg lg:text-xl font-medium text-textPrimary">
                <div className="flex gap-2 items-center">
                  <h1>Cart</h1>
                  <div className="relative">
                    <FaCartPlus
                      onClick={() => handleCartIcon(!clicked)}
                      className="text-[28px] text-textPrimary cursor-pointer"
                    />
                    <div className="absolute bg-textPrimary w-4 h-4 rounded -top-[2px] -right-[9px] text-textSecondary flex items-center justify-center text-xs">
                      {remainingData.length}
                    </div>
                    <div
                      className={`absolute bg-headerColor w-60 flex flex-col items-center gap-2 -right-20 ${
                        clicked ? "" : "hidden"
                      }`}
                    >
                      {remainingData.map((data, idx) => (
                        <div key={idx} className="">
                          <Link to="/cartdetails">
                            <div className="flex items-center gap-3">
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
                      <div className="w-10 h-10 rounded-full ">
                        <img
                          className="rounded-full"
                          src={userData.photoURL ? userData.photoURL : logo}
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
                            className="px-6 py-2 bg-headerButton rounded-sm"
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
                        <button
                          onClick={handleLogOut}
                          className="px-6 py-2 bg-headerButton rounded-sm"
                        >
                          Login
                        </button>
                      </div>
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <NavEnd
            cartsData={cartsData}
            clicked={clicked}
            handleCartIcon={handleCartIcon}
            remainingData={remainingData}
            LogOut={LogOut}
            userData={userData}
            handleLogOut={handleLogOut}
          />
        </div>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  cartsData: PropTypes.array,
};

export default Navigation;
