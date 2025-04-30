import React from "react";

const Hero = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Manage all of your <br />
            <span className="text-blue-600">cards in one place</span>
          </h1>
          <p className="text-gray-600 mt-6 text-lg max-w-md">
            From year to year we strive to invent the most innovative technology
            that is used by both small enterprises and space enterprises.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search article"
              className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/illustration.png"
            alt="Card Management"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
