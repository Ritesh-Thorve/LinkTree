import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const { handle } = await params;
  const doc = {
    links: [
      {
        link: "https://manohar",
        linktext: "linkedin",
      },
      {
        link: "https://manohar",
        linktext: "facebook",
      },
    ],
    imgurl: "/hero.png",
    handle: "manohar",
    desc: "lorem Ipsum is Lorem Ipsum in aenean Construct and therefore the function of Lore Ipsum is Lore",
  };
  return (
    <div className="flex items-center justify-start py-14 flex-col min-h-screen bg-purple-300">
      <div className="img">
        <Image width={100} height={100} src={doc.imgurl} alt="" />
      </div>
      <h4 className="font-bold text-xl">@{doc.handle}</h4>
      <p className="text-sm text-center w-80 text-gray-700">{doc.desc}</p>
      <div className="links">
        {doc.links.map((link, i) => (
          <Link
            key={i}
            href={link.link}
            target="_blank"
          >
            <span className="text-xs text-gray-500 mr-2">{link.linktext}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
