const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect(process.env.DB_URL, {
	keepAlive: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})
.then(() => console.log("Database connected!"))
.catch(() => console.log("Error in connecting database!"))

module.exports.User = require("./user");