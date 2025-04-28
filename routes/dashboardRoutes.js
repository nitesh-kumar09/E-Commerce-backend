// server/routes/dashboardRoutes.js
import express from "express";
import { getDashboardStats } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/stats", getDashboardStats); // GET /api/dashboard/stats

export default router;
