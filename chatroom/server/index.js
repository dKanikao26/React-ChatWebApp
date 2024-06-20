import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import UserRoute from './Routes/userRoute.js';
import ChatRoute from './Routes/chatRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 6000;
const url = process.env.URL || "mongodb://localhost:27017";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/users", UserRoute);
app.use("/api/chat", ChatRoute);

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err.message);
});

app.get("/", (req, res) => {
  res.send("Welcome to the chat app :)");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
