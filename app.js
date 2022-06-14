const path = require("path");
const express = require("express");
require("dotenv").config();
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>{
    res.render("welcome");
})

app.get("/music", (req, res) => {
    res.render("home");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening in ${PORT}`));