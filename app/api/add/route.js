import clientPromise from "@/lib/mongodb";
import { headers } from "next/headers";

export async function POST(request) {
  const body = await request.json();

  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");

  const doc = await collection.findOne({ handle: body.handle });
  if (doc) {
    return new Response(
      JSON.stringify({
        success: true,
        status: 200,
        message: "Handle already exists",
      }),
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }

  await collection.insertOne(body);
  return new Response(
    JSON.stringify({
      success: true,
      status: 200,
      message: "Linktree created successfully",
    }),
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
