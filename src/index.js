import express from "express";
import cors from "cors";

import routes from "../routes/server-routes.js";

const app = express();
const router = express.Router();

app.use("/", routes);

const port = 3000;

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
