import { NextApiHandler } from "next";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

type RegisterData = { username: string; email: string; password: string };

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") return res.status(400).json({ message: "Invalid method" });
  const { username, email, password }: RegisterData = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username.trim() == "" ||
    email.trim() == "" ||
    password.trim() == "" ||
    !email.includes("@") ||
    username.length < 6 ||
    password.length < 10
  ) {
    res.status(400).json({ message: "Invalid fields" });
    return;
  }

  const client = new MongoClient(process.env.MONGODB_URI!);
  await client.connect();
  const usersCollection = client.db().collection("users");
  try {
    const userExists = await usersCollection.findOne({ email });
    if (userExists) throw new Error("user already exist");
    const hashedPassword = await bcrypt.hash(password, 10);
    const { insertedId } = await usersCollection.insertOne({ username, email, password: hashedPassword });
    res.status(200).json({ insertedId });
  } catch (e) {
    if (e instanceof Error) {
      return res.status(400).json({ error: e.message });
    }
    return res.status(400).json(e);
  }
};

export default handler;
