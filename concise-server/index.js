require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");

const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);

app.use(function(req, res, next){
	let err = new Error("Not Found!")
	err.status = 404;
	next(err);
});

app.use(errorHandler);

app.listen(process.env.PORT, function(){
	console.log(`Server starting on port ${process.env.PORT}`);
});