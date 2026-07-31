const express = require("express");
const path = require("path");
const app = express();

app.use("/css",express.static(path.join(__dirname,"css")));
app.use("/js",express.static(path.join(__dirname,"js")));

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname,"views","home.html"));
});

app.get("/login",(req,res) =>{
    res.sendFile(path.join(__dirname,"views","login.html"));
});

app.get("/signup",(req,res) =>{
    res.sendFile(path.join(__dirname,"views","signup.html"));
});
app.get("/api/student",(req,res) =>{
    res.json({
        id:1,
        name:"aishuu",
        course:"java"
    });
});
app.listen(5000,() =>{
    console.log("server running on port 5000");
});