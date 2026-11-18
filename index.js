const express = require("express");
const app = express();
app.get("/",(req,res) => {
	res.send("the server is running");
});
const PORT = 3000;
app.listen(PORT, () => {
	console.log("server running at http://localhost:3000");
});
