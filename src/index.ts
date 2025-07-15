// server.ts or index.ts
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";

dotenv.config();

const app = express();

// ✅ Define all allowed frontend domains (production + local dev)
const allowedOrigins = [
  "https://pay.xtopay.co",
  "https://www.pay.xtopay.co",
  "https://xtopay.co",
  "https://www.xtopay.co",
  "http://localhost:3000",
  "http://localhost:3001",
];

// ✅ Setup CORS middleware
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., Postman or backend-to-backend)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        console.error(`❌ Blocked by CORS: ${origin}`);
        return callback(new Error(`CORS error: Origin ${origin} not allowed`), false);
      }
    },
    credentials: true, // if you're using cookies/auth
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // optional: limit allowed methods
    allowedHeaders: ["Content-Type", "Authorization"],     // optional: restrict headers
  })
);

// ✅ Parse JSON requests
app.use(express.json());

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("✅ Xtopay Backend API is running.");
});

// ✅ Register all route handlers
app.use("/", routes);

// ✅ Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Xtopay API is live on port ${PORT}`);
});
