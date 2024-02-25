require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./Routes/user.route.js");

app.use(express.json());

app.use("/user", userRoutes);

app.use("*", (req, res) => {
    res.status(404).send("Page not found, this is the default route.");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
})

mongoose.connect(`${process.env.DB_URL}`)
    .then(() => {
        console.log(`Mongoose connected: ${process.env.DB_URL}`);
    })
    .catch((error) => {
        console.error("Mongoose connection error:", error);
    });