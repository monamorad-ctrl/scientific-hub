import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/api/ai/chat", (req, res) => {
  const { q, lang } = req.body;
  if (!q) return res.status(400).json({ error: "No question" });

  res.json({
    reply: `AI (${lang || "auto"}): ${q}`
  });
});

app.post("/api/ai/analyze", (req, res) => {
  const { code } = req.body;
  res.json({
    issues: ["Example issue"],
    fix: "Check input validation"
  });
});

app.post("/api/kali/exec", (req, res) => {
  const { cmd } = req.body;
  res.json({
    output: `Simulated Kali command: ${cmd}`
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
