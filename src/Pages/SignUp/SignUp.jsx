import { Link, useNavigate } from "react-router-dom";
// import InputShape from "../AddProducts/Form/InputShape";
import Label from "../AddProducts/Form/Label";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { SignUpUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [passError, setPassError] = useState();
  const [signUp, setSignUp] = useState();

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.url.value;
    const password = e.target.password.value;
    const signUpInfo = {
      name,
      email,
      password,
      photoUrl,
    };

    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~-]).{6,}$/;
    if (!regex.test(password)) {
      setPassError(
        "Password Should be at least 6 character, one capital letter (A) and One Special character (!@#$%^&*~)"
      );
      Swal.fire({
        title: "OOps",
        text: passError,
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        // confirmButtonText: "Yes, delete it!",
      });
      return;
    }

    if (signUp) {
      Swal.fire({
        title: "Great Job",
        text: "You are sign up is successful! Please do login using your Id and Password.",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        // confirmButtonText: "Yes, delete it!",
      });
      return;
    }

    console.log(signUpInfo);

    SignUpUser(email, password)
      .then((res) => {
        const user = res.user;

        updateProfile(user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then((res) => {
            const users = res.users;
            console.log(users);
          })
          .catch((error) => console.error(error));
        console.log(user);

        navigate("/login");
        setSignUp(user);
        console.log(user);
        user
          ? Swal.fire({
              title: "Great Job",
              text: "You are sign up is successful! Please do login using your Id and Password.",
              icon: "success",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              // confirmButtonText: "Yes, delete it!",
            })
          : "Something Went Wrong! Please try again letter.";
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="py-10">
      <h1 className="text-center pt-10 font-bold text-5xl text-headerButton font-inter">
        Please Sign In Your Account!
      </h1>
      <div className="flex justify-center py-10">
        <form
          className="md:w-9/12 lg:w-1/2 w-full mx-5 flex flex-col gap-7"
          onSubmit={handleSignUp}
        >
          <div className="relative flex-1">
            <input
              required
              type="text"
              name="name"
              className="peer h-10 pl-2 w-full border rounded-lg border-headerButton text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
              placeholder=" "
            />
            <Label htmlFor="imgLink">Name</Label>
          </div>

          <div className="relative flex-1">
            <input
              required
              type="text"
              name="url"
              className="peer h-10 pl-2 w-full border rounded-lg border-headerButton text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
              placeholder=" "
            />
            <Label htmlFor="shortDes">Photo URL</Label>
          </div>
          <div className="relative flex-1">
            <input
              required
              type="email"
              name="email"
              className="peer h-10 pl-2 w-full border rounded-lg border-headerButton text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
              placeholder=" "
            />
            <Label htmlFor="shortDes">Email</Label>
          </div>
          <div className="relative flex-1">
            <input
              required
              type="password"
              name="password"
              className="peer h-10 pl-2 w-full border rounded-lg border-headerButton text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-500 focus:placeholder-gray-500 transition-all duration-300"
              placeholder=" "
            />
            <Label htmlFor="shortDes">Password</Label>
          </div>

          <button
            type="submit"
            className="py-3 rounded-lg bg-headerButton text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-center w-full cursor-pointer"
          >
            SignUp
          </button>
          <h1 className="flex gap-1">
            <span>I you already have an account, please</span>
            <Link to="/login" className="text-base font-semibold text-blue-500">
              Login
            </Link>
          </h1>
        </form>
      </div>
      <p className="text-center">{passError}</p>
    </div>
  );
};

export default SignUp;
