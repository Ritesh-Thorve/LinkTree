"use client";
import Image from "next/image";
import React, { useState } from "react";

function page() {
  const [link, setlink] = useState("");
  const [linktext, setlinktext] = useState("");
  const [imgurl, setimgurl] = useState("");
  const [handle, sethandle] = useState("");

  return (
    <div className="bg-purple-300 min-h-screen grid grid-cols-2">
      <div className="col1 flex flex-col justify-center items-center">
        <h1 className="font-bold my-8 text-3xl text-gray-900">
          Create your Linktree
        </h1>
        <div className="flex flex-col gap-2">
          <div>
            <input
              className="p-2 px-4 w-[36vw] mb-3 rounded-md focus:outline-gray-600"
              placeholder="Choose handle"
              type="text"
              onChange={(e) => sethandle(e.target.value)}
              value={handle}
            />
          </div>
          <div className="flex">
            <input
              className="p-2 px-4 mx-2 mb-3 rounded-md focus:outline-gray-600"
              placeholder="Enter link text"
              type="text"
              onChange={(e) => setlinktext(e.target.value)}
              value={linktext}
            />
            <input
              className="p-2 px-4 mb-3 rounded-md focus:outline-gray-600"
              placeholder="Enter link"
              type="text"
              onChange={(e) => setlink(e.target.value)}
              value={link}
            />
            <button className="bg-gray-950 text-white hover:bg-gray-800 font-medium rounded-full text-sm ml-2 px-5 mb-3 py-3">
              Add Link
            </button>
          </div>
          <div>
            <input
              className="p-2 w-[26vw] px-4 mb-3 rounded-md focus:outline-gray-600"
              placeholder="Enter image url"
              type="text"
              onChange={(e) => setimgurl(e.target.value)}
              value={imgurl}
            />
            <button className="bg-gray-950 text-white hover:bg-gray-800 font-medium rounded-full text-sm ml-2 px-5 py-3">
              Create Linktree
            </button>
          </div>
        </div>
      </div>

      <div className="col2 flex justify-center absolute right-0 top-0 bottom-0">
        <Image alt="sideimage" src="/side-image.png" width={400} height={400} />
      </div>
    </div>
  );
}

export default page;
