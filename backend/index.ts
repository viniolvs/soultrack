//USING NODE 16.20.0 TO RUN
import { PrismaClient } from "@prisma/client";
import express from "express";
import path from "path";
import url from "url";
import cors from "cors";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use("/", express.static(path.join(__dirname, "./../frontend")));
app.use(cors());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.get("/playlists", async (req, res) => {
  const prisma = new PrismaClient();
  const playlists = await prisma.playlist.findMany();
  res.json(playlists);
});

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`  App running in port ${PORT}`);
  console.log(`  > Local: http://localhost:${PORT}/`);
});
