import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

export default NextAuth({
  providers: [
    Credentials({
      // @ts-ignore
      async authorize(credentials: { email: string; password: string }, _req) {
        if (!credentials) throw new Error("credentials doesn't exist");
        if (!credentials.email || !credentials.password) throw new Error("email/password doesn't exist");
        const client = new MongoClient(process.env.MONGODB_URI!);
        await client.connect();
        const usersCollection = client.db().collection("users");
        const user = await usersCollection.findOne({ email: credentials.email });
        if (!user) {
          client.close();
          throw new Error("user does not exists");
        }
        const compareHash = await bcrypt.compare(credentials.password, user.password);
        if (!compareHash) {
          client.close();
          throw new Error("invalid password");
        }
        client.close();
        return {
          username: user.username,
          email: credentials.email,
        };
      },
    }),
  ],
});
