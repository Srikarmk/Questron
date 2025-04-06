import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Link to="/" className="block text-5xl p-5">
        {" "}
        Questron
      </Link>
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">Login</h1>
      </div>
      <form
        action="/"
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md p-2 w-full"
            id="name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            className="border-2 border-gray-300 rounded-md p-2 w-full"
            id="password"
          />
        </div>
        <div className="flex justify-between mb-4">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            to="/login"
            className="block mx-auto text-center w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block mx-auto text-center w-full bg-gray-300 p-2 rounded-md hover:bg-gray-400"
          >
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
