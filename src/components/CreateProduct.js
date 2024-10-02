import React, { useState } from "react";
const CreateForm = (props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-slate-400 h-[100vh] px-5">
      <div className={`xl:max-w-3xl w-full p-5 sm:p-10 rounded-md`}>
        <h1 className={`text-center text-xl sm:text-3xl font-semibold`}>
          Create Product
        </h1>
        <div className="w-full mt-8">
          <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
            <input
              className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline`}
              type="text"
              placeholder="Input Name of Product"
            />
            <input
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline`}
              type="text"
              placeholder="Input Link for Image (ex: http://google.co.id/)"
            />
            <input
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline`}
              type="text"
              placeholder="Input for Description"
            />
            <input
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline`}
              type="number"
              placeholder="Input Price Product (ex: 1500)"
            />
            <div className="flex justify-between">
              <button
                className="w-1/2  bg-[#4c4645] text-gray-100 py-4 rounded-lg transition-all duration-300 ease-in-out justify-center focus:shadow-outline focus:outline-none"
                onClick={() => props.newMessage("save")}
              >
                <span className="ml-3">Save</span>
              </button>
              <button
                className="w-1/2 ml-2 bg-[#efeeed] rounded-lg"
                onClick={() => props.newMessage("cancel")}
              >
                <span className="ml-3">Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateForm;
