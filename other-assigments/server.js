const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cookieParser());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Auth middleware
function isAuthenticated(req) {
  return req.cookies.auth === "true";
}

function requireAuth(req, res, next) {
  if (isAuthenticated(req)) {
    next();
  } else {
    res.redirect("/login");
  }
}

// Routes
app.get("/login", (req, res) => {
  if (isAuthenticated(req)) return res.redirect("/dashboard");
  res.sendFile(path.join(__dirname, "static", "login.html"));
});

app.post("/login", (req, res) => {
  // Simulate login
  res.cookie("auth", "true", { path: "/" });
  res.redirect("/dashboard");
});

app.get("/dashboard", requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, "static", "dashboard.html"));
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "static", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Custom server running on http://localhost:${PORT}`);
});
