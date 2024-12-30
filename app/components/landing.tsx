import React from "react";

const Landing = () => {
  return (
    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-10 lg:flex lg:h-screen lg:items-center lg:px-12">
      <div className="max-w-xl text-center sm:text-left">
        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
          Join with us on a
          <strong className="block font-extrabold text-rose-500">
            {" "}
            Spiritual Journey.{" "}
          </strong>
        </h1>
        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a
            href="#"
            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            ✆ Book A Call
          </a>

          <a
            href="#"
            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
          >
            🗓️ View Schedule
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
