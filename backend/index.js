import dotenv from "dotenv";
dotenv.config();  // this must be at the very top
//console.log("Mapbox token:", process.env.MAPBOX_TOKEN);
// index.js
import cors from "cors";
import express from "express";
import medicineRoutes from "./routes/medicineRoutes.js";
import substituteRoutes from "./routes/substituteRoutes.js"; 

const app = express();
app.use(cors());
app.use(express.json()); 

app.use(cors({
  origin: "http://localhost:8080"
}));

// basic test route
app.get("/", (req, res) => {
  res.send("Smart Medicine Locator Backend Running 🚀");
});

app.use("/api", medicineRoutes);
app.use("/api/substitutes", substituteRoutes);

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
