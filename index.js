import express from "express";
import dotenv from 'dotenv';
import DB from "./config/db.js";
import UserRouters from "./routes/UserRoutes.js";
import PlayerRouters from "./routes/PlayerRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
console.log(port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", UserRouters);
app.use("/api", PlayerRouters);

DB.connectDB(process.env.DB_URI);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});