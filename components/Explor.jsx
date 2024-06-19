import React from "react";

const Explor = ({view}) => {
  return (
    <>
      {view ? <div className="min-h-[60vh] w-screen px-[8rem]">
        <h1 className="mt-4 text-[2rem] font-semibold">Explore options near me</h1>
        <div className="flex mt-4 justify-between rounded-lg items-center border px-3 py-4 text-slate-600 min-h-[3rem] bg-white w-full">
          <h1 className="text-2xl">Popular cuisines near me</h1>
          <i className=" text-xl bx bx-chevron-down"></i>
        </div>
        <div className="flex mt-4 justify-between rounded-lg items-center border px-3 py-4 text-slate-600 min-h-[3rem] bg-white w-full">
          <h1 className="text-2xl">Popular restaurant type near me</h1>
          <i className=" text-xl bx bx-chevron-down"></i>
        </div>
        <div className="flex mt-4 justify-between rounded-lg items-center border px-3 py-4 text-slate-600 min-h-[3rem] bg-white w-full">
          <h1 className="text-2xl">Top Restaurant chains</h1>
          <i className=" text-xl bx bx-chevron-down"></i>
        </div>
        <div className="flex mt-4 justify-between rounded-lg items-center border px-3 py-4 text-slate-600 min-h-[3rem] bg-white w-full">
          <h1 className="text-2xl">Cities We Deliver To</h1>
          <i className=" text-xl bx bx-chevron-down"></i>
        </div>
      </div>: null}
    </>
  );
};

export default Explor;
