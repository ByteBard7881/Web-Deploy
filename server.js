const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (_, res) => {
  res.json({ message: "Backend is running" });
});

app.get("/api/message", (_, res) => {
  res.json({ message: "Hello from backend" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
