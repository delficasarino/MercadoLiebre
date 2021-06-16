const express = require("express");
const path = require("path");

const app = express();

//Server
app.listen(3000,()=> console.log("Servidor en http://localhost:3000"));

//Public Access
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

//Web Access
app.use(require("./routes/web"));



