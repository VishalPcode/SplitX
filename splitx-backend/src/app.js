import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerRouter  from "./swagger.js";
// import { swaggerUiMiddleware, swaggerSpec } from "./swagger.js";



const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:8000", // swagger
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);


// Core middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);
app.use("/api-docs", swaggerRouter);
console.log("Swagger Loaded");
// app.use("/api-docs", swaggerUiMiddleware.serve, swaggerUiMiddleware.setup(swaggerSpec));


// Global Error Handler — ALWAYS LAST!
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    errors: err.errors || [],
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
});

export { app };
