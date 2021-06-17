const express = require ("express");
const app = express.Router();
const path = require ("path");

//Website Routes
app.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "../views/home.html")));

app.get("/register", (req,res) => res.sendFile(path.resolve(__dirname, "../views/register.html")));
app.get("/login", (req,res) => res.sendFile(path.resolve(__dirname, "../views/login.html")));

app.post("/", (req,res) => res.sendFile(path.resolve(__dirname, "../views/home.html")));

module.exports = app