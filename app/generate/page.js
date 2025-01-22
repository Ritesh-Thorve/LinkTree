"use client";
import Image from "next/image";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function page() {
  const [links, setlinks] = useState([{ link: "", linktext: "" }]);
  const [imgurl, setimgurl] = useState("");
  const [handle, sethandle] = useState("");

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...links];
    list[index][name] = value;
    setlinks(list);
  };

  const addLink = () => {
    setlinks(links.concat({ link: "", linktext: "" }));
  };

  const submitLink = async (link, linktext, handle) => {
    const res = await fetch("http://localhost:3000/api/add", {
      method: "POST",
      body: JSON.stringify({
        link: link,
        linktext: linktext,
        handle: handle,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (!data.success) {
      return toast.error(data.message);
    }
    toast.success(data.message);
  };

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
            {links.map((link, i) => {
              return (
                <div key={i}>
                  <input
                    className="p-2 px-4 mx-2 mb-3 rounded-md focus:outline-gray-600"
                    placeholder="Enter link text"
                    type="text"
                    onChange={(e) => handleChange(e, i)}
                    value={link.linktext}
                  />
                  <input
                    className="p-2 px-4 mb-3 rounded-md focus:outline-gray-600"
                    placeholder="Enter link"
                    type="text"
                    onChange={(e) => handleChange(e, index)}
                    value={link.link}
                  />
                </div>
              );
            })}
            <button
              onClick={addLink}
              className="bg-gray-950 text-white hover:bg-gray-800 font-medium rounded-full text-sm ml-2 px-5 mb-3 py-3"
            >
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
            <button
              onClick={() => {
                submitLink(link, linktext, handle);
                setlinks([{}]);
              }}
              className="bg-gray-950 text-white hover:bg-gray-800 font-medium rounded-full text-sm ml-2 px-5 py-3"
            >
              Create Linktree
            </button>
          </div>
        </div>
      </div>

      <div className="col2 flex justify-center absolute right-0 top-0 bottom-0">
        <Image alt="sideimage" src="/side-image.png" width={400} height={400} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default page;
