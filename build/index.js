"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./route/auth"));
const app = (0, express_1.default)();
// app.use(express.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/auth", auth_1.default);
app.get("/", (req, res) => {
    res.send("Hello World k xa roshan dai!!!!!");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});