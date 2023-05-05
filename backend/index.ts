import { PrismaClient } from "@prisma/client";
import express from "express";
import path from "path";
import url from "url";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/", express.static(path.join(__dirname, "./../frontend")));
app.use(cors());

app.get("/playlists", async (req, res) => {
  const playlists = await prisma.playlist.findMany();
  res.json(playlists);
});

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`  App running in port ${PORT}`);
  console.log(`  > Local: http://localhost:${PORT}/`);
});
