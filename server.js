const express = require("express");
const app = express();
const connectDB = require('./config/db')

// Connnect Database
connectDB();
// Init middleware
app.use(express.json({extended: false}))
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the ContactKeep API" });
});
// Define routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server started on ${PORT}"));
