import express from "express";
import dotenv from 'dotenv';
import DB from "./config/db.js";
import UserRouters from "./routes/UserRoutes.js";
import PlayerRouters from "./routes/PlayerRoutes.js";
import PedidoRouters from "./routes/PedidoRoutes.js";
import ProductoRouters from "./routes/ProductoRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
console.log(port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", UserRouters);
app.use("/api", PlayerRouters);
app.use("/api", PedidoRouters);
app.use("/api", ProductoRouters);

DB.connectDB(process.env.DB_URI);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});