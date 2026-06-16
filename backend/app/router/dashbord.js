const { Router } = require("express");
const { DashboardController } = require("../http/controllers/admin/dashboard/dashboard.controller");
const router = Router();

// دقت کنید که متد را از آبجکتِ کنترلر فراخوانی می‌کنیم
router.get("/stats", (req, res, next) => DashboardController.getDashboardStats(req, res).catch(next));

module.exports = {
  DashboardRoutes: router,
};
