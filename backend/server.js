const express = require("express");

const cookieparser = require("cookie-parser")
const authRoute = require("./routes/auth_route");
const messageRoute = require("./routes/messageRoute");
const userroute = require("./routes/userRoutes")
const connectTOmongoDB = require("./db/connectDB");
const { app, server } = require("./sockets/socket");
require("dotenv").config();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieparser());


app.use("/api/auth",authRoute);
app.use("/api/messages",messageRoute);
app.use("/api/users",userroute)

server.listen(port,() =>{
    connectTOmongoDB();
    console.log(`server is running in ${port}`);
})