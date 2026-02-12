import express from "express";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import authRoutes from "./routes/authRoutes";
import classRoutes from "./routes/classRoutes";
import studentRoutes from "./routes/studentRoutes";
import attendanceRoutes from "./routes/attendanceRoutes";
import feedbackRoutes from "./routes/feedbackRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";
import familyRoutes from "./routes/familyRoutes";
import exportRoutes from "./routes/exportRoutes";
import usersRoutes from "./routes/usersRoutes";
import schoolRoutes from "./routes/schoolRoutes";
import postRoutes from "./routes/postRoutes";
import { notFoundHandler, errorHandler } from "./middleware/errorHandlers";
import prisma from "./utils/prisma";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const validateEnv = () => {
	const required = ["DATABASE_URL", "JWT_SECRET", "JWT_EXPIRES_IN"];
	const missing = required.filter((key) => !process.env[key]);

	if (missing.length > 0) {
		console.error(
			`❌ Missing required environment variables: ${missing.join(", ")}`,
		);
		process.exit(1);
	}
};

validateEnv();

const allowedOrigins = process.env.CORS_ORIGINS?.split(",").map((o) =>
	o.trim(),
) || ["*"];

const corsOptions: CorsOptions = {
	origin: allowedOrigins.includes("*") ? true : allowedOrigins,
};

const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 500,
	standardHeaders: true,
	legacyHeaders: false,
});

const authLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 50,
	standardHeaders: true,
	legacyHeaders: false,
});

// Middleware
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("combined"));
app.use("/api/auth", authLimiter);
app.use("/api", apiLimiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/family", familyRoutes);
app.use("/api/export", exportRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/schools", schoolRoutes);
app.use("/api/posts", postRoutes);

// Health check
app.get("/api/health", (req, res) => {
	res.json({ status: "ok" });
});

// Root route
app.get("/", (req, res) => {
	res.json({ message: "Safari Escolar API is running 🚀" });
});

// 404 + error handlers
app.use(notFoundHandler);
app.use(errorHandler);

const server = app.listen(PORT, () => {
	console.log(`✅ Server running on port ${PORT}`);
});

// Graceful Shutdown
const shutdown = () => {
	console.log("🛑 Received kill signal, shutting down gracefully");
	server.close(() => {
		console.log("🔒 Closed out remaining connections");
		prisma
			.$disconnect()
			.catch((e) => console.error("Error disconnecting prisma", e))
			.finally(() => process.exit(0));
	});
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
