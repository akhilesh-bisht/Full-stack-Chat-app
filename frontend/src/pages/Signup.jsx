import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

export default function Signup() {
  const [authUser, setAuthUser] = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };

    setIsLoading(true); // Start loading

    try {
      await axios.post("/user/signup", userInfo);
      alert("Signup successful!");
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      setAuthUser(userInfo);
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        alert(`Error: ${error.response.data.message || "Signup failed!"}`);
      } else {
        console.error("Error:", error.message);
        alert("An unexpected error occurred!");
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  return (
    <div className="flex flex-1 flex-col w-[30%] mx-auto rounded-lg justify-center px-6 py-4 mt-10 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold text-gray-900">
          Sign up for an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Full Name
            </label>
            <div className="mt-2">
              <input
                {...register("fullName", { required: "Full name is required" })}
                type="text"
                placeholder="Enter your full name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-indigo-600"
              />
              {errors.fullName && (
                <span className="text-red-500">{errors.fullName.message}</span>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Email Address
            </label>
            <div className="mt-2">
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Enter your email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-indigo-600"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <div className="mt-2 relative">
              <input
                {...register("password", { required: "Password is required" })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-indigo-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-600"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Confirm Password
            </label>
            <div className="mt-2 relative">
              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                })}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-indigo-600"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-gray-600"
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
          </div>

          {/* Real-time Password Feedback */}
          <div>
            <p
              className={`mt-2 text-sm ${
                password && confirmPassword && password !== confirmPassword
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {password && confirmPassword
                ? password === confirmPassword
                  ? "Passwords match"
                  : "Passwords do not match"
                : ""}
            </p>
          </div>

          {/* Sign-Up Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-white hover:bg-indigo-500 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>

        {/* Sign-In Redirect */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
