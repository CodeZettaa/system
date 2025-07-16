import express from "express";
import connect from "./model/connection.js";
import compantRouter from "./src/company/company.routes.js";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("Hello World!"));
app.use(compantRouter);
connect();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
