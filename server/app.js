import express from "express";
import bodyParser from "body-parser";
import sitesRoutes from "./routes/sites.js";
import mysql from "mysql2";
import cors from "cors";

const app = express();
const PORT = 3001;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "open",
  database: "NEWPRODFLOW",
});
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.json());
// i will use jason for all application

app.use("/sites", sitesRoutes);

app.get("/", (req, res) => {
  res.send("Hello from home page");
});

app.listen(PORT, () =>
  console.log(`Serveur runnimg on port: http://localhost:${PORT}`)
);
