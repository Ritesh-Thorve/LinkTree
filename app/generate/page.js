import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="bg-purple-300 min-h-screen grid grid-cols-2">
      <div className="col1 flex flex-col justify-center items-center">
        <h1 className="font-bold my-8 text-3xl text-gray-900">
          Create your Linktree
        </h1>
        <div className="flex flex-col gap-2">
          <div>
            <input
              className="p-2 px-4 w-[20vw] mb-3 rounded-md focus:outline-gray-600"
              placeholder="Choose handle"
              type="text"
            />
          </div>
          <div className="flex gap-2">
            <input
              className="p-2 px-4 mx-2 mb-3 rounded-md focus:outline-gray-600"
              placeholder="Enter link text"
              type="text"
            />
            <input
              className="p-2 px-4 mb-3 rounded-md focus:outline-gray-600"
              placeholder="Enter link"
              type="text"
            />
            <button className="bg-gray-950 text-white hover:bg-gray-800 font-medium rounded-full text-sm ml-2 px-5 mb-3 py-3">
              Add Link
            </button>
          </div>
        </div>
        <div>
          <input
            className="p-2 w-[26vw] px-4 mb-3 rounded-md focus:outline-gray-600"
            placeholder="Enter image url"
            type="text"
          />
          <button className="bg-gray-950 text-white hover:bg-gray-800 font-medium rounded-full text-sm ml-2 px-5 py-3">
           Create Linktree
          </button>
        </div>
      </div>

      <div className="col2 flex justify-center absolute right-0 top-0 bottom-0">
        <Image alt="sideimage" src="/side-image.png" width={400} height={400} />
      </div>
    </div>
  );
}

export default page;
