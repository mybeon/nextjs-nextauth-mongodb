import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const { name, email, message }: { name: string; email: string; message: string } = req.body;
    if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim().length < 20) {
      res.status(400).json({ message: "invalid fields" });
      return;
    }

    let db;
    let client;
    try {
      client = new MongoClient(process.env.MONGODB_URI!);
      await client.connect();
      db = client.db();
    } catch (e) {
      client?.close();
      res.status(500).json({ message: "error connecting to db", error: e });
      return;
    }
    const messagesCollection = db.collection("messages");
    try {
      const result = await messagesCollection.insertOne({ name, email, message });
      client.close();
      res.status(200).json({ id: result.insertedId });
    } catch (e) {
      client.close();
      res.status(500).json({ message: "error inserting doc", error: e });
      return;
    }
  }
};

export default handler;
