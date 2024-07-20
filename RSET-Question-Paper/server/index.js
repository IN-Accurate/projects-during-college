const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const url = "mongodb+srv://admin:admin@quesitonpaper.wd5tytv.mongodb.net/";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once("open", ()=> {
    console.log("connected");
})

//middlewares
app.use(cors());
app.use(express.json());
app.use("/files", express.static("files"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// const authRouter = require("./routes/Auth");
// app.use("/auth",authRouter);
const pdfRouter = require("./routes/questionpaper");
app.use("/questionpaper",pdfRouter);

app.listen("3002",()=> {
    
});
