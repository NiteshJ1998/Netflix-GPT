import React, { useState } from "react";
import Header from "./Header";

const Loginn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="scale-110"
          src="src/assets/Netflix-bg.jpg"
          alt="Netflix-bg"
        />
      </div>
      <form
        className="absolute w-3/12 my-36 mx-auto right-0 left-0 text-white 
       p-12 rounded-lg bg-black "
      >
        <h1 className="font-bold text-3xl py-6">
          {isSignInForm ? "Sign In" : "Sign Up "}
        </h1>
        {!isSignInForm && (
          <input
            type="Name"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="  p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full">
          {isSignInForm ? "Sign In" : "Sign Up "}
        </button>
        <p onClick={toggleSignInForm} className="py-4">
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Loginn;
