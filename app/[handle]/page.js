import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { handle } = await params;
  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");
  const items = await collection.findOne({ handle: handle });

  if (!items) {
    return notFound();
  }
  return (
    <div className="flex items-center justify-start py-14 flex-col min-h-screen bg-purple-300">
      <div className="img  ">
        <img width={200} height={200} src={items.imgurl} alt="user img"  className="rounded-full border-4 border-red-100 "/>
      </div>
      <h4 className="my-3 font-bold text-3xl">@{items.handle}</h4>
      <p className=" text-center w-80 text-gray-700">{items.desc}</p>
      <div className="links mt-4 flex flex-col ">
        {items.links.map((link, i) => (
          <Link
            className="bg-white shadow-lg text-center w-80 pl-32 rounded-full   mb-2 p-2 mt-4 hover:bg-pink-100"
            key={i}
            href={link.link}
            target="_blank"
          >
            <span className="flex items-center justify-between text-gray-800  text-xl">
              {link.linktext} 
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
