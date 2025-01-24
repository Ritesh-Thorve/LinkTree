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
      <div className="img">
        <img width={100} height={100} src={items.imgurl} alt="user img" />
      </div>
      <h4 className="my-2 font-bold text-xl">@{items.handle}</h4>
      <p className="text-xs text-center w-80 text-gray-700">{items.desc}</p>
      <div className="links mt-4 flex flex-col">
        {items.links.map((link, i) => (
          <Link
            className="bg-white shadow-lg text-center w-80 pl-32 rounded-sm mb-2 p-2"
            key={i}
            href={link.link}
            target="_blank"
          >
            <span className="text-sm flex items-center justify-between text-gray-800">
              {link.linktext} <ExternalLinkIcon size={18} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
