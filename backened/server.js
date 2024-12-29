// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const contactRoute = require("./routes/contact");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../build")));


// Change to explicit CORS configuration
app.use(
  cors({
    origin: [
      "http://3.110.118.25/:3000",
      "http://3.110.118.25/:3001",
      "http://localhost:3002",
   
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


// Routes
app.use("/api/contact", contactRoute);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});


// MongoDB Connection with error handling
const mongoURI =
  "mongodb+srv://ashwinithakre1999:Oi0FUlKPquU9V2N3@aws.tdnkd.mongodb.net/aws";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB Test Database");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });


  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
  });
  // Global error handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});
  
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Test server running on port ${PORT}`);
  });
