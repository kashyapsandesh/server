import express from "express";
import authRouter from "./route/auth";
const app = express();
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);
app.get("/", (req, res) => {
  res.send("Hello World k xa roshan dai!!!!!");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
