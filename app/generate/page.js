"use client";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export const dynamic = "force-dynamic";
function page() {
  const search = useSearchParams();
  const router = useRouter();
  const searchval = search.get("handle");
  const [links, setlinks] = useState([{ link: "", linktext: "" }]);
  const [imgurl, setimgurl] = useState("");
  const [handle, sethandle] = useState(searchval || "");
  const [desc, setdesc] = useState("");

  const handleChange = (index, link, linktext) => {
    setlinks((initiallinks) => {
      return initiallinks.map((item, i) => {
        if (index == i) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  };

  const addLink = () => {
    setlinks(links.concat({ link: "", linktext: "" }));
  };

  const submitLink = async (links, handle, imgurl, desc) => {
    const res = await fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({
        links: links,
        imgurl: imgurl,
        handle: handle,
        desc: desc,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!data.success) {
      return toast.error(data.message);
    }
    toast.success(data.message);
    router.push(`/${handle}`);
  };

  return (
    <div className="bg-purple-400 min-h-screen grid grid-cols-2">
      <div className="mt-48">
        <div className="col1 flex flex-col justify-center items-center">
          <h1 className="font-bold my-5 text-3xl text-gray-900">
            Create Your Linktree
          </h1>
          <div className="flex flex-col">
            <div>
              <input
                className="p-2   px-4 w-full mb-3 rounded-full text-center text-xl focus:outline-gray-600 "
                placeholder="Enter handle name"
                type="text"
                onChange={(e) => sethandle(e.target.value)}
                value={handle}
              />
            </div>
            <div>
              {links &&
                links.map((link, i) => {
                  return (
                    <div key={i}>
                      <input
                        className="p-2 text-xl px-4 mr-4 rounded-full focus:outline-gray-600 text-center"
                        placeholder="Enter link text"
                        type="text"
                        onChange={(e) =>
                          handleChange(i, link.link, e.target.value)
                        }
                        value={link.linktext}
                      />
                      <input
                        className="p-2 text-xl px-4 mb-3 rounded-full focus:outline-gray-600 text-center"
                        placeholder="Enter link"
                        type="text"
                        onChange={(e) =>
                          handleChange(i, e.target.value, link.linktext)
                        }
                        value={link.link}
                      />
                    </div>
                  );
                })}
              <button
                onClick={addLink}
                className="bg-gray-950 flex text-white hover:bg-gray-800 font-medium rounded-full text-xs px-4 mb-2 py-3 mt-2"
              >
                <Plus className="mr-1" size={16} />
                Add Link
              </button>
            </div>
            <div className="flex flex-col">
              <input
                className="p-2 text-xl w-full px-4 mb-3 rounded-full focus:outline-gray-600 text-center mt-2"
                placeholder="Enter image url"
                type="text"
                onChange={(e) => setimgurl(e.target.value)}
                value={imgurl}
              />
              <input
                className="p-2 text-xl w-full px-4 mb-3 rounded-full focus:outline-gray-600 text-center"
                placeholder="Enter description"
                type="text"
                onChange={(e) => setdesc(e.target.value)}
                value={desc}
              />
              <button
                onClick={() => {
                  submitLink(links, handle, imgurl, desc);
                  setlinks([{ link: "", linktext: "" }]);
                  sethandle("");
                  setdesc("");
                  setimgurl("");
                }}
                disabled={imgurl == ""}
                className="bg-gray-700 hover:cursor-pointer text-white hover:bg-gray-900 font-medium rounded-full text-xs px-5 py-3 mt-2 "
              >
                Create Linktree
              </button>
            </div>
          </div>
        </div>

      </div>
      <div className="col2 absolute right-0 top-0 bottom-0 flex items-center bg-cover mr-44">
        <Image alt="sideimage" src="/LinkTree2.png" width={500} height={500} className="object-contain" />
      </div>

      <ToastContainer />
    </div>
  );
}

export default page;
