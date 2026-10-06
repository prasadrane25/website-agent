import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "website-agent" });
});

app.post("/api/design-preview", express.json({ limit: "1mb" }), (req, res) => {
  const title = typeof req.body?.title === "string" ? req.body.title : "Untitled design";
  res.json({
    ok: true,
    message: "Design received (placeholder agent)",
    preview: {
      title,
      pages: ["home"],
      generatedAt: new Date().toISOString(),
    },
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`website-agent listening on http://0.0.0.0:${port}`);
});
