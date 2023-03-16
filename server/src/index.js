import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/task.routes";

const express = require("express");
const app = express();
const connectDB = require("./services/mongoose");

connectDB();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(routes);

//ROTA
const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Servido iniciado na porta local http://localhost:${PORT}/`)
);
