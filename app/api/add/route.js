import { clientPromise } from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();

  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");

  const doc = await collection.findOne({ handle: body.handle });
  if (doc) {
    return Response.json({
      success: false,
      status: 200,
      message: "Handle already exists",
    });
  }

  await collection.insertOne(body);
  return Response.json({
    success: true,
    status: 200,
    message: "Linktree created successfully",
  });
}
