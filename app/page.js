import Image from "next/image";
import React from "react";

function page() {
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
        <div className="flex flex-col mt-20 justify-center ml-20 gap-5">
          <p className="text-5xl font-extrabold text-[#d2e823]">
            Everything you are. <br /> In one, simple link in bio.
          </p>
          <p className="text-sm text-[#d2e823]">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex gap-2 py-6">
            <input className="p-3 text-sm rounded-lg focus:outline-green-[#254f1a]" type="text" placeholder="linktr.ee/your-url" />
            <button className="bg-yellow-300">Claim your Linktree</button>
          </div>
        </div>
        <div className="flex justify-center items-end">
          <Image src="/hero.png" alt="hero image" width={450} height={450} />
        </div>
      </section>
      <section className="bg-[#a1144c] min-h-[100vh]"></section>
    </main>
  );
}

export default page;
