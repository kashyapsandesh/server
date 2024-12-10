import { Router, Request, Response } from "express";
import { db } from "../db";
import { NewUser, users } from "../db/schema";
import { eq } from "drizzle-orm";
import bcryptjs from "bcryptjs";

const authRouter = Router();
interface SignupBody {
  email: string;
  password: string;
  name: string;
}
authRouter.post(
  "/register",
  async (req: Request<{}, {}, SignupBody>, res: Response) => {
    try {
      const { name, email, password } = req.body;
      console.log(req.body);
      const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.email, email));

      if (existingUser.length > 0) {
        res.status(400).json({ error: "User already exists" });
        return;
      }
      const hashpassword = await bcryptjs.hash(password, 10);
      const newUser: NewUser = {
        name,
        email,
        password: hashpassword,
      };
      console.log(`newUser`, newUser);
      const [user] = await db.insert(users).values(newUser).returning();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
);
export default authRouter;
