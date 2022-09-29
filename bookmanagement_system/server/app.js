import express from "express";
import config from "config";

import "./DBconnect.js";
import UserRouter from "./Controllers/User/index.js";

const app = express();
const port = config.get("PORT");
app.use(express.json());

app.use("/api/User", UserRouter);

app.get("/", (req, res) => {
	res.send("this is Book Management System API BAckend");
});



app.listen(port, () => {
	console.log("server started at port: ", port);
});
