import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();

  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");
  const result = await collection.insertOne(body);
  console.log(body);
  return Response.json({
    status: 200,
    result: result,
    message: "Link added successfully",
  });
}
