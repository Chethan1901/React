import express from "express";
import config from "config";

import "./DBconnect.js";
import UserRouter from "./Controllers/User/index.js";

const app = express();
const port = config.get("PORT");
app.use(express.json());

app.get("/", (req, res) => {
	res.send("this is Book Management System API BAckend");
});

app.use("/api/User", UserRouter);

app.listen(port, () => {
	console.log("server started at port: ", port);
});
