import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-[#232946] h-screen flex flex-col items-center">
      <div className="text-5xl p-5 font-bold text-[#fffffe]">Questron</div>
      <div className="text-center my-20">
        <h1 className="text-3xl font-bold text-[#fffffe]">
          Your Academic Success is loading !
        </h1>
        <h3 className="my-10 text-[#fffffe]">
          Retrieval-Augmented Generation (RAG) for Domain-Specific Question
          Answering{" "}
        </h3>
      </div>
      <div className="flex justify-between space-x-[200px] mx-10 mt-20">
        <div className="flex-col items-center">
          <div className="p-5 bg-blue-200 rounded-full flex items-center justify-center w-24 h-24 mx-auto shadow-lg">
            A
          </div>
          <div className="text-center mt-5 text-[#fffffe]">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div className="flex-col items-center">
          <div className="p-5 bg-blue-200 rounded-full flex items-center justify-center w-24 h-24 mx-auto shadow-lg">
            A
          </div>
          <div className="text-center mt-5 text-[#fffffe]">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div className="flex-col items-center">
          <div className="p-5 bg-blue-200 rounded-full flex items-center justify-center w-24 h-24 mx-auto shadow-lg">
            A
          </div>
          <div className="text-center mt-5 text-[#fffffe]">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
      <Link
        to="/login"
        className="block mx-auto text-center w-[300px] p-5 rounded-3xl bg-[#b8c1ec] mt-26"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;
