import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const { name, email, message }: { name: string; email: string; message: string } = req.body;
    if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim().length < 20) {
      return res.status(200).json({ message: "invalid fields" });
    }
    const newMessage = {
      name,
      email,
      message,
    };
    res.status(200).json({ message: newMessage });
  }
};
