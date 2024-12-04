import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="h-screen flex flex-col space-y-4 justify-center items-center">
      <div className="flex items-center gap-4">
        <small className="text-9xl font-bold text-gray-600">404</small>
        <div className="">
          <h1 className="text-5xl font-bold text-gray-700">
            Oops! You're lost.
          </h1>
          <h1 className="text-xl font-bold text-gray-700">
            The page you are looking for was not found
          </h1>
        </div>
      </div>

      <button
        onClick={goBack}
        className="px-4 py-3 rounded-xl bg-black text-white mt-4 font-bold"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
