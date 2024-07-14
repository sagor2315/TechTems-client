import { Link, useLocation, useNavigate } from "react-router-dom";
import Label from "../AddProducts/Form/Label";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { SignInUser, GoogleSignIn } = useContext(AuthContext);
  const [userData, setUserData] = useState();
  console.log(userData);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;

    const loginInfo = {
      password,
      email,
    };
    console.log(loginInfo);

    SignInUser(email, password)
      .then((res) => {
        const user = res.user;
        navigate(location?.state ? location.state : "/");
        setUserData(user);
        console.log(user.email);
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        Swal.fire({
          title: "OOps",
          text: errorMessage,
          icon: "warning",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          // confirmButtonText: "Yes, delete it!",
        });
        console.log(errorMessage);
      });
  };

  const handleLoginWithGoogle = () => {
    GoogleSignIn()
      .then((res) => {
        const user = res.user;
        setUserData(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="py-12">
      <h1 className="text-center pt-10 font-bold text-5xl text-headerButton font-inter">
        Please Sign In Your Account!
      </h1>
      <div className="flex justify-center pt-10 pb-3">
        <form
          className="md:w-9/12 lg:w-1/2 w-full mx-5 flex flex-col gap-7"
          onSubmit={handleLogin}
        >
          <div className="relative flex-1">
            <input
              type="email"
              name="email"
              className="peer h-10 pl-2 w-full border rounded-lg border-headerButton text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
              placeholder=" "
            />
            <Label htmlFor="imgLink">Email</Label>
          </div>

          <div className="relative flex-1">
            <input
              type="password"
              name="password"
              className="peer h-10 pl-2 w-full border rounded-lg border-headerButton text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
              placeholder=" "
            />
            <Label htmlFor="shortDes">Password</Label>
          </div>

          <div className="">
            <div className="w-full">
              <button
                type="submit"
                className="py-3 rounded-lg bg-headerButton text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-center w-full cursor-pointer"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="md:w-9/12 lg:w-1/2 w-11/12 mx-auto">
        <button
          onClick={handleLoginWithGoogle}
          className="py-3 rounded-lg bg-headerButton text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-center w-full cursor-pointer"
        >
          Login With Google
        </button>
      </div>
      <h1 className="flex pt-2 gap-1 justify-center">
        <span>I you do not have an account, please</span>
        <Link to="/signup" className="text-base font-semibold text-blue-500">
          SignUp
        </Link>
      </h1>
    </div>
  );
};

export default Login;
