//USING NODE 16.20.0 TO RUN
import { PrismaClient } from "@prisma/client";
import express from "express";
import path from "path";
import url from "url";
import cors from "cors";
import bodyParser from "body-parser";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "./../frontend")));
app.use(cors());

app.get("/tags", async (req, res) => {
  // return all distinct tags from all playlists
  const tags = await prisma.playlist.findMany({
    select: {
      tag: true
    },
    distinct: ['tag']
  });
  res.json(tags)
})

// returns all playlists with a given tag
app.get("/tags/:tag", async (req, res) => {
  const tag: string = req.params.tag
  const playlists = await prisma.playlist.findMany({
    where: {
      tag,
    }
  })
  res.json(playlists)
})

app.get("/playlists", async (req, res) => {
  const playlists = await prisma.playlist.findMany();
  res.json(playlists);
});

app.post("/addPlaylist", async (req, res) => {
  const playlist = req.body
  const { name, description, author, tag } = playlist
  const user_src: string = playlist.src + "?utm_source=generator"
  const src = user_src.replace('/playlist/', '/embed/playlist/')
  const result = await prisma.playlist.create({
    data: {
      name,
      description,
      author,
      tag,
      src,
    },
  })
  res.json(result)
})

app.delete("/playlists/:id", async (req, res) => {
  const id: number = parseInt(req.params.id)
  const playlist = await prisma.playlist.delete({
    where: {
      id,
    },
  })
  res.json(playlist)
})

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`  App running in port ${PORT}`);
  console.log(`  > Local: http://localhost:${PORT}/`);
});
