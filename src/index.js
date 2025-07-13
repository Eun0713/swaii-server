import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import supabase from "./libs/supabaseClient.js";
import gestureRoutes from "./routes/gestureRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Swaii Server");
});

app.use("/gestures", gestureRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
