const express = require("express");
const path = require("path");

const app = express();
console.log(
  app.use("/", express.static(path.join(__dirname, "./../frontend/public")))
);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`  App running in port ${PORT}`);
  console.log(`  > Local: http://localhost:${PORT}/`);
});
