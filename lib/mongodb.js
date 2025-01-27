import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("Add Mongo URI to environment variable");

const client = new MongoClient(uri, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
const clientPromise = client.connect();

export default clientPromise;
