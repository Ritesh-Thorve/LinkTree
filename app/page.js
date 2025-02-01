"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function page() {
  const router = useRouter();
  const [url, seturl] = useState("");

  const handleClick = () => {
    router.push(`/generate?handle=${url}`);
  };

  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
        <div className="flex flex-col mt-20 justify-center ml-20 gap-5">
          <div className="text-7xl font-extrabold text-[#d2e823] ">
             <p>Everything</p> 
             <p>you are. In one,</p>
             <p>simple link in bio.</p>
          </div>
          <p className= "text-sm text-[#d2e823]">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex gap-2 py-6">
             
            <input
              className="p-3 text-sm rounded-lg focus:outline-green-[#254f1a]"
              type="text"
              placeholder="your-url"
              value={url}
              onChange={(e) => seturl(e.target.value)}
            />
            <button
              onClick={handleClick}
              className="bg-[#e9c0e9] px-5 py-3 text-sm font-semibold rounded-full"
            >
              Create Linktree
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-20">
          <Image src="/linktree1.png" alt="hero image" width={500} height={500} />
        </div>
      </section>
    </main>
  );
}

export default page;
